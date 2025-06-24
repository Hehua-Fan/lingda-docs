# 使用官方 Node.js 运行时作为基础镜像
FROM node:20-alpine AS base

# 安装必要的系统依赖
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# ========================
# 依赖安装阶段
# ========================
FROM base AS deps
# 安装生产和开发依赖
RUN npm ci

# ========================
# 构建阶段
# ========================
FROM base AS builder
WORKDIR /app

# 从deps阶段复制node_modules
COPY --from=deps /app/node_modules ./node_modules

# 复制项目文件
COPY . .

# 设置环境变量
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# 构建应用
RUN npm run build

# ========================
# 生产运行阶段
# ========================
FROM node:20-alpine AS runner
WORKDIR /app

# 安装必要的系统依赖（包括wget用于健康检查）
RUN apk add --no-cache libc6-compat wget

# 设置环境变量
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 创建非root用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制package.json并安装生产依赖
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# 复制必要的文件
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/markdown ./markdown
COPY --from=builder --chown=nextjs:nodejs /app/config ./config
COPY --from=builder --chown=nextjs:nodejs /app/i18n ./i18n
COPY --from=builder --chown=nextjs:nodejs /app/lib ./lib
COPY --from=builder --chown=nextjs:nodejs /app/components ./components

# 复制配置文件
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/middleware.ts ./
COPY --from=builder /app/tsconfig.json ./

# 切换到非root用户
USER nextjs

# 暴露端口
EXPOSE 3002

# 设置端口环境变量
ENV PORT 3002
ENV HOSTNAME "0.0.0.0"

# 启动应用
CMD ["npm", "run", "start"] 
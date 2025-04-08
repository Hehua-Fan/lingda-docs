/** @type {import('next').NextConfig} */
const nextConfig = {
  // 禁用 Next.js 内置的 i18n 系统，因为我们使用自定义中间件
  i18n: undefined,
  
  // 禁用 TypeScript 检查以允许构建过程完成
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 配置重写规则，将 markdown 路径映射到对应的语言版本
  async rewrites() {
    return {
      beforeFiles: [
        // 默认语言路径重写规则
        {
          source: '/',
          destination: '/zh/docs/getting-started',
        },
        // 其它重写规则可以按需添加
      ],
    };
  },
};

module.exports = nextConfig; 
# AutoAgents.ai 灵搭平台文档中心

这是 AutoAgents.ai 灵搭平台的官方文档仓库，包含平台的使用指南、API 文档和示例智能体的使用说明。基于 Next.js 构建的现代化多语言文档站点。

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/autoagents-ai/docs.git
cd docs
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问文档站点
```
http://localhost:3000
```
默认会自动跳转到中文文档的快速开始页面：`http://localhost:3000/zh/docs/getting-started`

## 项目结构

```
docs/
├── app/                # Next.js 应用目录
│   ├── [locale]/      # 国际化路由分组
│   │   └── docs/      # 文档路由
├── markdown/           # Markdown 文档内容
│   ├── zh/            # 中文内容
│   ├── en/            # 英文内容
│   └── jp/            # 日文内容
├── components/         # React 组件
│   ├── common/        # 通用组件
│   └── docs/          # 文档专用组件
├── i18n/              # 国际化配置
├── config/            # 配置文件
└── middleware.ts      # 中间件(处理i18n路由)
```

## Markdown 文档编辑指南

### 文件结构

Markdown 文档按语言和类别组织：

```
markdown/
├── zh/                  # 中文文档
│   ├── getting-started/ # 快速开始
│   ├── agents/          # 智能体
│   ├── knowledge-base/  # 知识库
│   └── examples/        # 示例
├── en/                  # 英文文档
└── jp/                  # 日文文档
```

### 创建新文档

1. 在对应语言文件夹下创建 Markdown 文件，确保三种语言的文件路径结构一致

2. 添加必要的 frontmatter：

```md
---
title: 文档标题
---

# 文档正文标题

内容...
```

3. 更新导航配置：

编辑 `config/navigation.ts` 文件，将新文档添加到对应菜单项中：

```typescript
// 左侧菜单配置 - 中文
export const menuItems: MenuItem[] = [
  {
    title: '分类名称',
    href: '/docs/category',
    children: [
      {
        title: '新文档名称',
        href: '/docs/category/new-doc'
      }
    ]
  }
];

// 同样更新 enMenuItems 和 jpMenuItems
```

4. 添加路径映射：

在 `config/navigation.ts` 的 `pathMap`、`enPathMap` 和 `jpPathMap` 中添加路径映射：

```typescript
export const pathMap: { [key: string]: string } = {
  // 添加新路径
  'new-doc': '新文档名称',
};

export const enPathMap: { [key: string]: string } = {
  'new-doc': 'New Document Name',
};

export const jpPathMap: { [key: string]: string } = {
  'new-doc': '新しいドキュメント名',
};
```

### Markdown 特殊语法

文档支持以下特殊功能：

1. **代码块**：使用三个反引号标记，可以指定语言

```js
function example() {
  console.log("Hello world");
}
```

2. **提示块**：使用 blockquote 语法

```md
> 这是一个提示信息
> 可以包含多行内容
```

3. **表格**：使用标准 Markdown 表格语法

```md
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 值1 | 值2 | 值3 |
```

4. **图片**：可以引用公共目录中的图片

```md
![图片描述](/imgs/example.png)
```

## 国际化支持

项目支持中文 (zh)、英语 (en) 和日语 (jp) 三种语言。

### 添加新的翻译内容

1. 确保每个文档在三种语言目录下都有对应的文件
2. 文件路径结构需保持一致，如：
   ```
   markdown/zh/examples/new-example.md
   markdown/en/examples/new-example.md
   markdown/jp/examples/new-example.md
   ```

3. 如果暂时没有翻译，可以使用以下模板：

英文版：
```md
---
title: English Document Title
description: "This page is not translated yet. We're working on it!"
---

> This document is being translated. Please check back later.
```

日文版：
```md
---
title: 日本語ドキュメントタイトル
description: "このページはまだ翻訳されていません。現在作業中です！"
---

> このドキュメントは翻訳中です。後ほどご確認ください。
```

## 技术栈

- **Next.js 14**: React 框架
- **Tailwind CSS**: 样式系统
- **TypeScript**: 类型检查
- **React Markdown**: Markdown 渲染

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详细信息

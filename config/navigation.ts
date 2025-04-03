/**
 * 导航相关配置
 * 集中管理导航显示名称和结构
 */

/**
 * 面包屑导航路径映射
 * key: URL路径片段
 * value: 显示名称
 */
export const pathMap: { [key: string]: string } = {
  // 基本路径
  'docs': '文档',
  'dev': '开发指南',
  'api': 'API文档',
  
  // 服务相关
  'services': '四大模块',
  'agents': '智能体',
  'knowledge-base': '知识库',
  'database': '数据库',
  'toolkit': '工具箱',
  
  // 案例展示
  'examples': '案例展示',
  'agent-builder': '智能体搭建',
  'ai-teacher': 'AI助教',
  'nl2bi': '企业问数',
  'shopping-guide': '商品导购',
  'code-saver': '代码拯救者',
  'prompt-generator': 'Prompt提示词生成',
  'employee-handbook': '员工手册',
};

/**
 * 菜单项接口
 */
export interface MenuItem {
  title: string;       // 菜单项标题
  href?: string;       // 菜单项链接
  children?: MenuItem[]; // 子菜单项
}

/**
 * 左侧菜单配置
 */
export const menuItems: MenuItem[] = [
  {
    title: '欢迎使用',
    href: '/docs'
  },
  {
    title: '四大模块',
    children: [
      {
        title: '智能体',
        href: '/docs/services/agents'
      },
      {
        title: '知识库',
        href: '/docs/services/knowledge-base'
      },
      {
        title: '数据库',
        href: '/docs/services/database'
      },
      {
        title: '工具箱',
        href: '/docs/services/toolkit'
      }
    ]
  },
  {
    title: '案例展示',
    children: [
      {
        title: '代码拯救者智能体',
        href: '/docs/examples/code-saver'
      },
      {
        title: '商品导购智能体',
        href: '/docs/examples/shopping-guide'
      },
      {
        title: '企业问数智能体NL2BI',
        href: '/docs/examples/nl2bi'
      },
      {
        title: '员工手册查询智能体',
        href: '/docs/examples/employee-handbook'
      },
      {
        title: 'Prompt提示词生成智能体',
        href: '/docs/examples/prompt-generator'
      },
      {
        title: '智能体搭建小助手',
        href: '/docs/examples/agent-builder'
      },
      {
        title: 'AI助教智能体',
        href: '/docs/examples/ai-teacher'
      }
    ]
  },
  {
    title: 'API文档',
    href: '/docs/dev/api'
  },
]; 
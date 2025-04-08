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
  'getting-started': '快速开始',
  'discover': '发现智能体',
  'create-your-first-agent': '创建属于您的第一个智能体',
  'create-your-first-knowledge-base': '创建属于您的第一个知识库',
  
  // 智能体
  'agents': '智能体',
  'workflow': '工作流规划',
  'publish': '发布智能体',
  'module': '模块',
  'multiagents-and-tools': '多智能体与工具调用',
  
  // 知识库
  'knowledge-base': '知识库',
  'kb-create': '创建知识库',
  'kb-retrieval-test': '检索测试',
  
  // 数据库和工具箱
  'database': '数据库',
  'toolkit': '工具箱',
  'official-tools': '官方工具',
  'custom-tools': '自定义工具',
  'mcp-servers': 'MCP Servers',
  
  // 权限管理
  'authorization': '权限管理',
  
  // 案例展示
  'examples': '案例展示',
  'code-saver': '代码拯救者智能体',
  'shopping-guide': '商品导购智能体',
  'nl2bi': '企业问数智能体NL2BI',
  'employee-handbook': '员工手册查询智能体',
  'prompt-generator': 'Prompt提示词生成智能体',
  'agent-builder': '智能体搭建小助手',
  'ai-teacher': 'AI助教智能体',
  
  // API文档
  'api': 'API文档'
};

/**
 * 英文路径映射
 */
export const enPathMap: { [key: string]: string } = {
  // 基本路径
  'docs': 'Documentation',
  'getting-started': 'Quick Start',
  'discover': 'Discover Agents',
  'create-your-first-agent': 'Create Your First Agent',
  'create-your-first-knowledge-base': 'Create Your First Knowledge Base',
  
  // 智能体
  'agents': 'Agents',
  'workflow': 'Workflow Planning',
  'publish': 'Publish Agent',
  'module': 'Modules',
  'multiagents-and-tools': 'Multi-Agent & Tools',
  
  // 知识库
  'knowledge-base': 'Knowledge Base',
  'kb-create': 'Create Knowledge Base',
  'kb-retrieval-test': 'Retrieval Test',
  
  // 数据库和工具箱
  'database': 'Database',
  'toolkit': 'Toolkit',
  'official-tools': 'Official Tools',
  'custom-tools': 'Custom Tools',
  'mcp-servers': 'MCP Servers',
  
  // 权限管理
  'authorization': 'Authorization',
  
  // 案例展示
  'examples': 'Examples',
  'code-saver': 'Code Snippet Saver Agent',
  'shopping-guide': 'Shopping Guide Agent',
  'nl2bi': 'Enterprise Data Query Agent NL2BI',
  'employee-handbook': 'Employee Handbook Query Agent',
  'prompt-generator': 'Prompt Generator Agent',
  'agent-builder': 'Agent Building Assistant',
  'ai-teacher': 'AI Teaching Assistant',
  
  // API文档
  'api': 'API Documentation'
};

/**
 * 日文路径映射
 */
export const jpPathMap: { [key: string]: string } = {
  // 基本路径
  'docs': 'ドキュメント',
  'getting-started': 'クイックスタート',
  'discover': 'エージェントを見つける',
  'create-your-first-agent': '最初のエージェントを作成',
  'create-your-first-knowledge-base': '最初のナレッジベースを作成',
  
  // 智能体
  'agents': 'エージェント',
  'workflow': 'ワークフロー計画',
  'publish': 'エージェントの公開',
  'module': 'モジュール',
  'multiagents-and-tools': 'マルチエージェントとツール',
  
  // 知识库
  'knowledge-base': 'ナレッジベース',
  'kb-create': 'ナレッジベースの作成',
  'kb-retrieval-test': '検索テスト',
  
  // 数据库和工具箱
  'database': 'データベース',
  'toolkit': 'ツールキット',
  'tool-usage': '公式ツール',
  'tool-development': 'カスタムツール',
  'tool-management': 'MCP Servers',
  
  // 权限管理
  'authorization': '権限管理',
  
  // 案例展示
  'examples': '事例紹介',
  'code-saver': 'コードスニペット保存エージェント',
  'shopping-guide': 'ショッピングガイドエージェント',
  'nl2bi': '企業データクエリエージェント NL2BI',
  'employee-handbook': '従業員ハンドブッククエリエージェント',
  'prompt-generator': 'プロンプト生成エージェント',
  'agent-builder': 'エージェント構築アシスタント',
  'ai-teacher': 'AI教育アシスタント',
  
  // API文档
  'api': 'APIドキュメント'
};

/**
 * 根据语言获取相应的路径映射
 */
export function getPathMapByLocale(locale: string): { [key: string]: string } {
  switch (locale) {
    case 'en':
      return enPathMap;
    case 'jp':
      return jpPathMap;
    case 'zh':
    default:
      return pathMap;
  }
}

/**
 * 菜单项接口
 */
export interface MenuItem {
  title: string;       // 菜单项标题
  href?: string;       // 菜单项链接
  children?: MenuItem[]; // 子菜单项
}

/**
 * 左侧菜单配置 - 中文
 */
export const menuItems: MenuItem[] = [
  {
    title: '快速开始',
    href: '/docs/getting-started',
    children: [
      {
        title: '发现智能体',
        href: '/docs/getting-started/discover'
      },
      {
        title: '创建属于您的第一个智能体',
        href: '/docs/getting-started/create-your-first-agent'
      }
    ]
  },
  {
    title: '智能体',
    href: '/docs/agents',
    children: [
      {
        title: '工作流规划',
        href: '/docs/agents/workflow',
        children: [
          {
            title: '模块',
            href: '/docs/agents/workflow/module'
          },
          {
            title: '多智能体与工具调用',
            href: '/docs/agents/workflow/multiagents-and-tools'
          },
        ]
      },
      {
        title: '发布智能体',
        href: '/docs/agents/publish'
      }
    ]
  },
  {
    title: '知识库',
    href: '/docs/knowledge-base',
    children: [
      {
        title: '创建知识库',
        href: '/docs/knowledge-base/kb-create'
      },
      {
        title: '检索测试',
        href: '/docs/knowledge-base/kb-retrieval-test'
      }
    ]
  },
  {
    title: '数据库',
    href: '/docs/database'
  },
  {
    title: '工具箱',
    href: '/docs/toolkit',
    children: [
      {
        title: '官方工具',
        href: '/docs/toolkit/official-tools'
      },
      {
        title: '自定义工具',
        href: '/docs/toolkit/custom-tools'
      },
      {
        title: 'MCP Servers',
        href: '/docs/toolkit/mcp-servers'
      }
    ]
  },
  {
    title: '权限管理',
    href: '/docs/authorization'
  },
  {
    title: '案例展示',
    href: '/docs/examples',
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
    href: '/docs/api'
  }
];

/**
 * 左侧菜单配置 - 英文
 */
export const enMenuItems: MenuItem[] = [
  {
    title: 'Quick Start',
    href: '/docs/getting-started',
    children: [
      {
        title: 'Discover Agents',
        href: '/docs/getting-started/discover'
      },
      {
        title: 'Create Your First Agent',
        href: '/docs/getting-started/create-your-first-agent'
      }
    ]
  },
  {
    title: 'Agents',
    href: '/docs/agents',
    children: [
      {
        title: 'Workflow Planning',
        href: '/docs/agents/workflow',
        children: [
          {
            title: 'Modules',
            href: '/docs/agents/workflow/module'
          },
          {
            title: 'Multi-Agent & Tools',
            href: '/docs/agents/workflow/multiagents-and-tools'
          },
        ]
      },
      {
        title: 'Publish Agent',
        href: '/docs/agents/publish'
      }
    ]
  },
  {
    title: 'Knowledge Base',
    href: '/docs/knowledge-base',
    children: [
      {
        title: 'Create Knowledge Base',
        href: '/docs/knowledge-base/kb-create'
      },
      {
        title: 'Retrieval Test',
        href: '/docs/knowledge-base/kb-retrieval-test'
      }
    ]
  },
  {
    title: 'Database',
    href: '/docs/database'
  },
  {
    title: 'Toolkit',
    href: '/docs/toolkit',
    children: [
      {
        title: 'Official Tools',
        href: '/docs/toolkit/official-tools'
      },
      {
        title: 'Custom Tools',
        href: '/docs/toolkit/custom-tools'
      },
      {
        title: 'MCP Servers',
        href: '/docs/toolkit/mcp-servers'
      }
    ]
  },
  {
    title: 'Authorization',
    href: '/docs/authorization'
  },
  {
    title: 'Examples',
    href: '/docs/examples',
    children: [
      {
        title: 'Code Saver Agent',
        href: '/docs/examples/code-saver'
      },
      {
        title: 'Shopping Guide Agent',
        href: '/docs/examples/shopping-guide'
      },
      {
        title: 'NL2BI Agent',
        href: '/docs/examples/nl2bi'
      },
      {
        title: 'Employee Handbook Agent',
        href: '/docs/examples/employee-handbook'
      },
      {
        title: 'Prompt Generator Agent',
        href: '/docs/examples/prompt-generator'
      },
      {
        title: 'Agent Builder Assistant',
        href: '/docs/examples/agent-builder'
      },
      {
        title: 'AI Teaching Assistant',
        href: '/docs/examples/ai-teacher'
      }
    ]
  },
  {
    title: 'API Documentation',
    href: '/docs/api'
  }
];

/**
 * 左侧菜单配置 - 日文
 */
export const jpMenuItems: MenuItem[] = [
  {
    title: 'クイックスタート',
    href: '/docs/getting-started',
    children: [
      {
        title: 'エージェントを見つける',
        href: '/docs/getting-started/discover'
      },
      {
        title: '最初のエージェントを作成',
        href: '/docs/getting-started/create-your-first-agent'
      }
    ]
  },
  {
    title: 'エージェント',
    href: '/docs/agents',
    children: [
      {
        title: 'ワークフロー計画',
        href: '/docs/agents/workflow',
        children: [
          {
            title: 'モジュール',
            href: '/docs/agents/workflow/module'
          },
          {
            title: 'マルチエージェントとツール',
            href: '/docs/agents/workflow/multiagents-and-tools'
          },
        ]
      },
      {
        title: 'エージェントの公開',
        href: '/docs/agents/publish'
      }
    ]
  },
  {
    title: 'ナレッジベース',
    href: '/docs/knowledge-base',
    children: [
      {
        title: 'ナレッジベースの作成',
        href: '/docs/knowledge-base/kb-create'
      },
      {
        title: '検索テスト',
        href: '/docs/knowledge-base/kb-retrieval-test'
      }
    ]
  },
  {
    title: 'データベース',
    href: '/docs/database'
  },
  {
    title: 'ツールキット',
    href: '/docs/toolkit',
    children: [
      {
        title: '公式ツール',
        href: '/docs/toolkit/official-tools'
      },
      {
        title: 'カスタムツール',
        href: '/docs/toolkit/custom-tools'
      },
      {
        title: 'MCP Servers',
        href: '/docs/toolkit/mcp-servers'
      }
    ]
  },
  {
    title: '権限管理',
    href: '/docs/authorization'
  },
  {
    title: '事例紹介',
    href: '/docs/examples',
    children: [
      {
        title: 'コードセーバーエージェント',
        href: '/docs/examples/code-saver'
      },
      {
        title: 'ショッピングガイドエージェント',
        href: '/docs/examples/shopping-guide'
      },
      {
        title: '企業データ分析エージェントNL2BI',
        href: '/docs/examples/nl2bi'
      },
      {
        title: '従業員ハンドブックエージェント',
        href: '/docs/examples/employee-handbook'
      },
      {
        title: 'プロンプト生成エージェント',
        href: '/docs/examples/prompt-generator'
      },
      {
        title: 'エージェントビルダーアシスタント',
        href: '/docs/examples/agent-builder'
      },
      {
        title: 'AI教育アシスタント',
        href: '/docs/examples/ai-teacher'
      }
    ]
  },
  {
    title: 'APIドキュメント',
    href: '/docs/api'
  }
];

/**
 * 根据语言获取相应的菜单项
 */
export function getMenuItemsByLocale(locale: string): MenuItem[] {
  switch (locale) {
    case 'en':
      return enMenuItems;
    case 'jp':
      return jpMenuItems;
    case 'zh':
    default:
      return menuItems;
  }
} 
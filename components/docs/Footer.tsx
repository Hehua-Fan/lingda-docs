'use client';

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & 版权栏 */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-purple-700">灵搭平台</span>
              <span className="ml-2 text-sm text-gray-500">企业级智能体构建</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              低代码智能体构建平台，赋能企业AI应用开发
            </p>
            <p className="text-xs text-gray-500">
              &copy; {currentYear} AutoAgents.ai 保留所有权利
            </p>
          </div>
          
          {/* 产品与服务 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">产品与服务</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs/services/agents" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  智能体构建
                </Link>
              </li>
              <li>
                <Link href="/docs/services/knowledge-base" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  知识库集成
                </Link>
              </li>
              <li>
                <Link href="/docs/services/toolbox" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  工具集成
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  企业解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 开发者资源 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">开发者资源</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs/features/database" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  API 文档
                </Link>
              </li>
              <li>
                <Link href="/docs/examples" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  案例展示
                </Link>
              </li>
              <li>
                <Link href="/docs/features/i18n" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  开发指南
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 关于我们 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">关于我们</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  公司介绍
                </Link>
              </li>
              <li>
                <Link href="/customers" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  客户案例
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 社交媒体链接 */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            灵搭平台 - 让企业轻松构建和部署专属智能体，无需编程知识
          </p>
          
          <div className="flex space-x-5">
            <a href="https://github.com/autoagents" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://twitter.com/autoagents_ai" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Twitter">
              <FiTwitter size={18} />
            </a>
            <a href="mailto:contact@autoagents.ai" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Email">
              <FiMail size={18} />
            </a>
            <a href="https://discord.gg/autoagents" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Discord">
              <FiMessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

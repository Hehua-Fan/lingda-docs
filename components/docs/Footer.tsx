'use client';

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiMessageSquare } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { getLocale } from '@/i18n/locale';

// 定义多语言内容
const footerContent = {
  zh: {
    platformName: '灵搭平台',
    platformDesc: '企业级智能体构建',
    platformIntro: '低代码智能体构建平台，赋能企业AI应用开发',
    copyright: '保留所有权利',
    
    productsServices: '产品与服务',
    agentBuild: '智能体构建',
    knowledgeBase: '知识库集成',
    toolIntegration: '工具集成',
    enterpriseSolution: '企业解决方案',
    
    devResources: '开发者资源',
    apiDoc: 'API 文档',
    caseShow: '案例展示',
    devGuide: '开发指南',
    changelog: '更新日志',
    
    aboutUs: '关于我们',
    companyIntro: '公司介绍',
    customerCases: '客户案例',
    contactUs: '联系我们',
    privacyPolicy: '隐私政策',
    
    slogan: '灵搭平台 - 让企业轻松构建和部署专属智能体，无需编程知识'
  },
  en: {
    platformName: 'Auto Agents Platform',
    platformDesc: 'Enterprise Agent Building',
    platformIntro: 'Low-code agent building platform, empowering enterprise AI application development',
    copyright: 'All rights reserved',
    
    productsServices: 'Products & Services',
    agentBuild: 'Agent Building',
    knowledgeBase: 'Knowledge Base',
    toolIntegration: 'Tool Integration',
    enterpriseSolution: 'Enterprise Solution',
    
    devResources: 'Developer Resources',
    apiDoc: 'API Documentation',
    caseShow: 'Case Studies',
    devGuide: 'Development Guide',
    changelog: 'Changelog',
    
    aboutUs: 'About Us',
    companyIntro: 'Company Introduction',
    customerCases: 'Customer Cases',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    
    slogan: 'Auto Agents Platform - Helping enterprises easily build and deploy custom agents without programming knowledge'
  },
  jp: {
    platformName: 'オートエージェントプラットフォーム',
    platformDesc: '企業向けエージェント構築',
    platformIntro: 'ローコードエージェント構築プラットフォーム、企業AIアプリケーション開発を強化',
    copyright: '全著作権所有',
    
    productsServices: '製品とサービス',
    agentBuild: 'エージェント構築',
    knowledgeBase: 'ナレッジベース統合',
    toolIntegration: 'ツール統合',
    enterpriseSolution: '企業向けソリューション',
    
    devResources: '開発者リソース',
    apiDoc: 'APIドキュメント',
    caseShow: '事例紹介',
    devGuide: '開発ガイド',
    changelog: '変更履歴',
    
    aboutUs: '私たちについて',
    companyIntro: '会社紹介',
    customerCases: '顧客事例',
    contactUs: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    
    slogan: 'オートエージェントプラットフォーム - プログラミング知識なしで、企業が専用エージェントを簡単に構築・展開できるようにします'
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = getLocale(pathname) as 'zh' | 'en' | 'jp';
  const content = footerContent[locale];
  
  return (
    <footer className="bg-[#f3f4f6] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 使用响应式网格布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & 版权栏 */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-gray-900 break-words">{content.platformName}</span>
              <span className="ml-2 text-sm text-gray-500 hidden sm:inline">{content.platformDesc}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {content.platformIntro}
            </p>
            <p className="text-xs text-gray-500">
              &copy; {currentYear} AutoAgents.ai {content.copyright}
            </p>
          </div>
          
          {/* 产品与服务 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{content.productsServices}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/docs/services/agents`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.agentBuild}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/docs/services/knowledge-base`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.knowledgeBase}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/docs/services/toolbox`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.toolIntegration}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/enterprise`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.enterpriseSolution}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 开发者资源 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{content.devResources}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/docs/features/database`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.apiDoc}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/docs/examples`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.caseShow}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/docs/features/i18n`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.devGuide}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/changelog`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.changelog}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 关于我们 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{content.aboutUs}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.companyIntro}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/customers`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.customerCases}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.contactUs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/privacy`} className="text-sm text-gray-600 hover:text-[#4e47ec] transition-colors">
                  {content.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 社交媒体链接 */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            {content.slogan}
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

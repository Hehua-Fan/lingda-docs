'use client';

import { useState } from 'react';
import { Search, X, Menu, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { getLocale } from '@/i18n/locale';

// 定义各语言的文本
const headerText = {
  zh: {
    title: "灵搭平台使用文档",
    searchPlaceholder: "搜索文档...",
    platformLink: "前往灵搭平台"
  },
  en: {
    title: "Lingda Platform Documentation",
    searchPlaceholder: "Search documentation...",
    platformLink: "Go to Lingda Platform"
  },
  jp: {
    title: "リンダプラットフォームドキュメント",
    searchPlaceholder: "ドキュメントを検索...",
    platformLink: "リンダプラットフォームへ"
  }
};

interface HeaderProps {
  toggleSidebar: () => void;
  toggleToc: () => void;
}

export default function Header({ toggleSidebar, toggleToc }: HeaderProps) {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const text = headerText[locale] || headerText.zh; // 默认使用中文
  
  // 添加移动端搜索框显示控制
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-8">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo和标题 - 在移动端始终显示 */}
        <div className="flex items-center">
          <Link href={`/${locale}/docs/getting-started`} className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 text-sm md:text-base truncate max-w-[120px] md:max-w-none">
              {text.title}
            </span>
          </Link>
        </div>
        
        {/* 搜索框 - 桌面端显示在中间，移动端点击图标后显示 */}
        <div className={`${isSearchOpen ? 'absolute inset-x-0 top-0 z-50 bg-white h-14 px-4 flex items-center' : 'hidden md:flex'} flex-1 items-center justify-center px-4 md:px-8`}>
          <div className="w-full max-w-md relative">
            {isSearchOpen && (
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 md:hidden"
                aria-label="关闭搜索"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <div className="relative">
              <Search className={`absolute ${isSearchOpen ? 'left-12 md:left-3' : 'left-3'} top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400`} />
              <input
                type="search"
                placeholder={text.searchPlaceholder}
                className={`w-full rounded-full border border-gray-200 bg-gray-50/50 py-1.5 ${isSearchOpen ? 'pl-20 md:pl-10' : 'pl-10'} pr-4 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-0`}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <kbd className="hidden rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:inline-block">⌘K</kbd>
              </div>
            </div>
          </div>
        </div>
        
        {/* 右侧操作区 */}
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* 移动端搜索按钮 */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-1 text-gray-500" 
            aria-label="打开搜索"
          >
            <Search className="h-5 w-5" />
          </button>
          
          {/* 语言切换器 */}
          <LanguageSwitcher />
          
          {/* 移动端目录按钮 */}
          <button 
            onClick={toggleToc}
            className="md:hidden lg:hidden p-1 text-gray-500" 
            aria-label="文章目录"
          >
            <BookOpen className="h-5 w-5" />
          </button>
          
          {/* 移动端左侧菜单按钮 */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-1 text-gray-500" 
            aria-label="目录菜单"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          {/* 平台链接 - 在移动端隐藏 */}
          <a
            href="https://autoagents.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-700 underline hover:text-gray-900 hover:no-underline"
          >
            {text.platformLink}
          </a>
        </div>
      </div>
    </header>
  );
}

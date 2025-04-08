'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { getLocale } from '@/i18n/locale';

// 定义各语言的文本
const headerText = {
  zh: {
    title: "灵搭平台使用文档",
    platformLink: "前往灵搭平台"
  },
  en: {
    title: "Lingda Platform Documentation",
    platformLink: "Go to Lingda Platform"
  },
  jp: {
    title: "リンダプラットフォームドキュメント",
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
  
  // 添加一个状态用于跟踪窗口尺寸
  const [isMobile, setIsMobile] = useState(false);

  // 监听窗口大小变化
  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    // 初始检查
    checkIsMobile();
    
    // 添加窗口大小变化监听
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkIsMobile);
      
      // 清理函数
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 sm:px-8">
      <div className="flex h-14 items-center justify-between">
        {/* Logo和标题 - 在移动端始终显示 */}
        <div className="flex items-center">
          <Link href={`/${locale}/docs/getting-started`} className="flex items-center space-x-2">
            <span className="font-medium text-gray-900 text-sm md:text-base truncate max-w-[200px] md:max-w-none">
              {text.title}
            </span>
          </Link>
        </div>
        
        {/* 右侧操作区 */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* 移动端左侧菜单按钮 */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md" 
            aria-label="目录菜单"
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* 语言切换器 - 在较小屏幕上使用简化版本 */}
          <div className={isMobile ? "w-10" : ""}>
            <LanguageSwitcher simplified={isMobile} />
          </div>
          
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

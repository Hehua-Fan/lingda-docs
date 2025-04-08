'use client';

import { useToc } from './toc-context';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getLocale } from '@/i18n/locale';
import { useEffect, useState } from 'react';

// 导航标题的多语言版本
const navigationTitle = {
  zh: '本页导航',
  en: 'On This Page',
  jp: 'このページ内'
};

// 回到顶部文本的多语言版本
const backToTopText = {
  zh: '回顶部',
  en: 'Back to top',
  jp: 'トップに戻る'
};

// 无标题提示的多语言版本
const noHeadingsText = {
  zh: '当前页面没有标题',
  en: 'No headings on this page',
  jp: 'このページには見出しがありません'
};

export default function RightMenu() {
  const { items } = useToc();
  const pathname = usePathname();
  
  // 获取当前语言
  const locale = getLocale(pathname) as 'zh' | 'en' | 'jp';
  
  // 检测当前是否是移动端
  const [isMobile, setIsMobile] = useState(false);

  // 使用 useEffect 来确保只在客户端访问 window
  useEffect(() => {
    // 这个函数只在客户端执行
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    // 初始检查
    checkIsMobile();
    
    // 添加窗口大小变化监听 - 只在客户端
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkIsMobile);
      
      // 清理函数
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  // 滚动到顶部功能
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  // 在移动端点击目录项后自动关闭目录面板
  const handleItemClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    // 获取目标元素
    const targetElement = document.getElementById(id);
    
    if (targetElement) {
      // 更新URL，但不触发默认的滚动行为
      history.pushState(null, '', `#${id}`);
      
      // 获取header高度（假设header高度为64px，可根据实际调整）
      const headerHeight = 64;
      
      // 计算元素距离顶部的位置，并减去header高度
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      // 平滑滚动到该位置
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // 如果需要在移动端关闭目录，可以取消下面的注释
    // if (isMobile) {
    //   // 关闭目录
    // }
  };

  return (
    <nav className={`py-6 ${isMobile ? 'px-5' : 'px-6'} ${!isMobile && 'sticky top-0'}`}>
      <div className="flex items-center gap-2 mb-5">
        <Image 
          src="/img/page_menu.svg" 
          alt="page menu" 
          width={16} 
          height={16} 
          className="text-[#6c727f]"
        />
        <h2 className="text-sm font-semibold text-[#000000]">{navigationTitle[locale]}</h2>
      </div>
      
      {items.length > 0 ? (
        <>
          <ul className="space-y-3">
            {items.map((item, index) => {
              const key = item.id || `toc-item-${index}`;
              return (
                <li 
                  key={key} 
                  className={`
                    ${item.level === 1 ? 'mt-3' : ''}
                    ${item.level === 1 ? 'ml-0' : ''}
                    ${item.level === 2 ? 'ml-2' : ''}
                    ${item.level === 3 ? 'ml-4' : ''}
                  `}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleItemClick(e, item.id)}
                    className={`
                      text-[13px] hover:text-[#121826] block leading-5
                      ${item.level === 1 ? 'font-medium text-[#6c727f]' : 'font-light text-[#6c727f]'}
                      ${isMobile ? 'py-1 text-[14px]' : ''}
                    `}
                  >
                    {item.title || `Heading ${index + 1}`}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* 分隔线和回到顶部按钮 */}
          <div className="mt-6 pt-4 border-t border-gray-200 pl-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-[#6c727f] hover:text-[#121826] text-sm transition-colors cursor-pointer mt-3"
              aria-label={backToTopText[locale]}
            >
              <span>{backToTopText[locale]}</span>
              <Image src="/img/back-to-top.png" alt="arrow up" width={16} height={16} className="ml-1" />
            </button>
          </div>
        </>
      ) : (
        <p className="text-[13px] text-[#6c727f] italic">{noHeadingsText[locale]}</p>
      )}
    </nav>
  );
}
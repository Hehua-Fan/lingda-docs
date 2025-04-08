'use client';

import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getLocale } from '@/i18n/locale';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TocContextType {
  items: TocItem[];
  updateItems: (items: TocItem[]) => void;
  isTocOpen: boolean;
  setTocOpen: (open: boolean) => void;
}

const defaultContext: TocContextType = {
  items: [],
  updateItems: () => {},
  isTocOpen: false,
  setTocOpen: () => {},
};

// 需要过滤的标题（包含各语言版本）
const excludedTitles = {
  zh: ['本页导航', '产品与服务', '开发者资源', '关于我们', '灵搭平台'],
  en: ['On This Page', 'Products & Services', 'Developer Resources', 'About Us', 'Auto Agents Platform'],
  jp: ['このページ内', '製品とサービス', '開発者リソース', '私たちについて', 'プラットフォーム']
};

const TocContext = createContext<TocContextType>(defaultContext);

export const useToc = () => useContext(TocContext);

export function TocProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [isTocOpen, setTocOpen] = useState(false);
  const pathname = usePathname();
  const processingRef = useRef(false); // 使用ref防止并发处理
  const locale = getLocale(pathname);
  
  // 当路径变化时重置目录
  useEffect(() => {
    setItems([]);
  }, [pathname]);

  // 监听自定义事件，用于在移动端关闭目录
  useEffect(() => {
    // 确保在客户端环境
    if (typeof window === 'undefined') return;
    
    const handleToggleToc = (event: CustomEvent) => {
      if (event.detail && typeof event.detail.open === 'boolean') {
        setTocOpen(event.detail.open);
        
        // 更新body的属性，用于CSS选择器和其他组件
        if (event.detail.open) {
          document.body.setAttribute('data-toc-open', 'true');
        } else {
          document.body.removeAttribute('data-toc-open');
        }
      }
    };

    // 添加事件监听
    window.addEventListener('toggle-toc', handleToggleToc as EventListener);
    
    // 清理函数
    return () => {
      window.removeEventListener('toggle-toc', handleToggleToc as EventListener);
    };
  }, []);

  // 自动扫描页面中的标题元素并生成目录
  useEffect(() => {
    // 确保在客户端环境
    if (typeof window === 'undefined') return;
    
    // 防止无限循环更新
    if (processingRef.current) {
      return;
    }
    
    // 延迟执行以确保页面内容已经渲染
    const timeoutId = setTimeout(() => {
      // 防止重复处理
      processingRef.current = true;
      
      try {
        // 只选择主内容区域内的标题，避免捕获页面其他区域（如Footer）的标题
        // 通过查找main元素，而不是整个document
        const mainContent = document.querySelector('main');
        if (!mainContent) {
          processingRef.current = false;
          return;
        }
        
        const headings = mainContent.querySelectorAll('h1, h2, h3');
        const tocItems: TocItem[] = [];
        
        // 跟踪已添加的标题，避免重复
        const addedTitles = new Set();
        const usedIds = new Set();

        headings.forEach((heading, index) => {
          // 获取原始ID或为元素创建新ID
          let headingId = heading.id;
          const title = heading.textContent || `Heading ${index + 1}`;
          
          // 排除应该过滤的标题
          if (
            excludedTitles[locale as keyof typeof excludedTitles]?.includes(title) || 
            addedTitles.has(title)
          ) {
            return;
          }
          
          // 如果ID已被使用或为空，则创建唯一ID
          if (!headingId || usedIds.has(headingId)) {
            // 创建基于标题和索引的唯一ID
            headingId = `heading-${title.toLowerCase().replace(/\s+/g, '-')}-${index}`;
            
            // 更新DOM元素的ID，确保锚点链接正常工作
            heading.id = headingId;
          }
          
          // 记录已使用的ID
          usedIds.add(headingId);
          
          // 记录已添加的标题
          addedTitles.add(title);
          
          // 获取标题级别
          let level = 1;
          if (heading.tagName === 'H2') level = 2;
          if (heading.tagName === 'H3') level = 3;

          tocItems.push({
            id: headingId,
            title,
            level,
          });
        });

        // 避免不必要的状态更新 - 使用字符串化比较
        const newItemsStr = JSON.stringify(tocItems);
        const currentItemsStr = JSON.stringify(items);
        
        if (tocItems.length > 0 && newItemsStr !== currentItemsStr) {
          setItems(tocItems);
        }
      } finally {
        // 处理完成，重置状态
        processingRef.current = false;
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, items, locale]);

  // 实现更新项目方法
  const updateItemsHandler = (newItems: TocItem[]) => {
    // 防止无限循环更新
    if (processingRef.current) {
      return;
    }
    
    processingRef.current = true;
    
    try {
      // 确保没有重复的ID和标题
      const uniqueTitles = new Set();
      const uniqueIds = new Set();
      const validItems = newItems.filter((item, index) => {
        // 跳过应该过滤的标题
        if (
          !item.title || 
          excludedTitles[locale as keyof typeof excludedTitles]?.includes(item.title)
        ) {
          return false;
        }
        
        // 处理重复标题
        if (uniqueTitles.has(item.title)) {
          return false;
        }
        uniqueTitles.add(item.title);
        
        // 确保ID唯一
        let itemId = item.id;
        if (!itemId || uniqueIds.has(itemId)) {
          itemId = `manual-heading-${item.title.toLowerCase().replace(/\s+/g, '-')}-${index}`;
        }
        uniqueIds.add(itemId);
        
        // 更新ID
        item.id = itemId;
        return true;
      });
      
      // 只有当新项目与现有项目不同时才更新
      const newItemsStr = JSON.stringify(validItems);
      const currentItemsStr = JSON.stringify(items);
      
      if (validItems.length > 0 && newItemsStr !== currentItemsStr) {
        setItems(validItems);
      }
    } finally {
      processingRef.current = false;
    }
  };

  // 更新目录打开/关闭状态的处理程序
  const handleTocToggle = (open: boolean) => {
    // 设置状态前确保没有冲突的操作
    setTocOpen(open);
    
    // 确保在客户端环境
    if (typeof window !== 'undefined') {
      // 延迟触发自定义事件，避免可能的冲突
      setTimeout(() => {
        // 同时触发自定义事件，用于通知其他组件
        const tocToggleEvent = new CustomEvent('toggle-toc', { detail: { open } });
        window.dispatchEvent(tocToggleEvent);
        
        // 更新body属性
        if (open) {
          document.body.setAttribute('data-toc-open', 'true');
        } else {
          document.body.removeAttribute('data-toc-open');
        }
      }, 0);
    }
  };

  return (
    <TocContext.Provider 
      value={{ 
        items, 
        updateItems: updateItemsHandler,
        isTocOpen,
        setTocOpen: handleTocToggle
      }}
    >
      {children}
    </TocContext.Provider>
  );
} 
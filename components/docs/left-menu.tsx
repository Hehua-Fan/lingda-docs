'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getMenuItemsByLocale } from '@/config/navigation';
import type { MenuItem } from '@/config/navigation';
import { getLocale } from '@/i18n/locale';
import Link from 'next/link';

/**
 * 菜单项组件
 * @param item - 菜单项数据
 * @param level - 菜单层级，用于缩进
 */
function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  
  // 获取当前语言
  const locale = getLocale(pathname);
  
  // Only consider exact matches for active state, not parent items with active children
  const isActive = pathname === (item.href ? `/${locale}${item.href}` : '');
  
  // 默认只展开"快速开始"和当前活动项
  const shouldBeExpanded = hasChildren && (
    isActive || 
    (item.children || []).some(child => pathname.includes(child.href || '')) ||
    item.href === '/docs/getting-started'  // 快速开始
  );
  const [isOpen, setIsOpen] = useState(shouldBeExpanded);

  // 当路径变化时更新展开状态
  useEffect(() => {
    if (shouldBeExpanded && !isOpen) {
      setIsOpen(true);
    }
  }, [pathname, shouldBeExpanded, isOpen]);

  // 构建带有语言前缀的链接
  const href = item.href || '#';
  const localizedHref = href.startsWith('/') 
    ? `/${locale}${href}`
    : href;

  // 点击箭头按钮时的处理函数（停止事件冒泡，只切换展开/折叠状态）
  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止冒泡，避免触发父元素的点击事件
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 菜单项容器 */}
      <div
        className={`flex items-center justify-between py-2 ${
          isActive ? 'bg-[#e6e9fd]' : 'hover:bg-[#f3f4f6]'
        } cursor-pointer text-[13px] pl-3 pr-3 mx-1 my-0.5 rounded-md`}
      >
        {/* 菜单项链接 */}
        <Link
          href={localizedHref}
          className={`flex-1 ${
            isActive ? 'text-[#4e47ec] font-medium' : 'text-[#6c727f] hover:text-[#121826]'
          }`}
        >
          {item.title}
        </Link>
        {/* 展开/收起箭头图标 */}
        {hasChildren && (
          <span 
            className={`transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'text-[#4e47ec] rotate-180' : 'text-[#6c727f]'
            }`}
            onClick={handleArrowClick}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      {/* 子菜单容器 */}
      <div
        className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* 子菜单内容 */}
        {hasChildren && item.children && (
          <div className="relative mt-0.5">
            {/* 垂直分隔线 */}
            <div className="absolute left-[1.4rem] top-0 bottom-0 w-px bg-[#e5e7eb]" />
            {/* 子菜单项列表 */}
            <div className="relative left-[1.6rem] space-y-1 py-1 pr-2 w-[calc(100%-1.6rem)]">
              {item.children.map((child, index) => (
                <MenuItem key={index} item={child} level={level + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 左侧菜单组件
 * 渲染整个文档导航菜单
 */
export default function LeftMenu() {
  const pathname = usePathname();
  
  // 获取当前语言
  const locale = getLocale(pathname);
  
  // 根据当前语言获取菜单项
  const menuItems = getMenuItemsByLocale(locale);
  
  return (
    <nav className="py-4 space-y-1 mt-2">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </nav>
  );
}

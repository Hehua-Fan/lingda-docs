'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/config/navigation';
import type { MenuItem } from '@/config/navigation';

/**
 * 菜单项组件
 * @param item - 菜单项数据
 * @param level - 菜单层级，用于缩进
 */
function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === pathname;
  
  // 默认展开所有带子菜单的项目
  const [isOpen, setIsOpen] = useState(hasChildren);

  return (
    <div>
      {/* 菜单项容器 */}
      <div
        className={`flex items-center justify-between py-2 hover:bg-purple-50 cursor-pointer text-[13px] pl-2 pr-2 mx-2 rounded-sm ${isActive ? 'bg-purple-50' : ''}`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* 菜单项链接 */}
        <a
          href={item.href}
          className={`flex-1 hover:text-purple-600 ${
            isActive ? 'text-purple-600 font-medium' : 'text-gray-600'
          }`}
          onClick={(e) => hasChildren && e.preventDefault()}
        >
          {item.title}
        </a>
        {/* 展开/收起箭头图标 */}
        {hasChildren && (
          <span 
            className={`transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'text-purple-500 rotate-180' : 'text-gray-400'
            }`}
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
            <div className="absolute left-[1.4rem] top-0 bottom-0 w-px bg-purple-100" />
            {/* 子菜单项列表 */}
            <div className="relative left-[1.6rem] space-y-1 py-1 w-54.5">
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
  return (
    <nav className="py-6 space-y-1">
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </nav>
  );
}

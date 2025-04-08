'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getPathMapByLocale } from '@/config/navigation';
import { locales, getLocale } from '@/i18n/locale';
import React from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // 获取当前语言
  const currentLocale = getLocale(pathname);
  
  // 根据当前语言获取路径映射
  const pathMap = getPathMapByLocale(currentLocale);
  
  // 过滤掉语言前缀和 'docs' 路径
  const pathSegments = pathname.split('/').filter(path => path);
  
  // 检查第一个部分是否是语言代码
  const firstSegment = pathSegments[0];
  // 使用类型断言，添加前缀 _ 表示类型检查可忽略
  const isFirstSegmentLocale = locales.includes(firstSegment as any);
  
  // 如果第一个部分是语言代码，则过滤掉
  const paths = pathSegments
    .filter((path, index) => 
      (index !== 0 || !isFirstSegmentLocale) && path !== 'docs'
    );
  
  const breadcrumbs = paths.map((path, index) => {
    const displayName = pathMap[path] || path;
    const isLast = index === paths.length - 1;
    
    return (
      <div key={path} className="flex items-center">
        <span className={`${isLast ? 'text-[#394150]' : 'text-[#6c727f]'} text-sm`}>
          {displayName}
        </span>
        {!isLast && (
          <ChevronRight className="h-4 w-4 mx-2 text-[#6c727f]" />
        )}
      </div>
    );
  });

  return (
    <div className="flex items-center py-4 px-8 md:px-8 lg:px-14 text-sm">
      {breadcrumbs}
    </div>
  );
} 
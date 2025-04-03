'use client';

import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { pathMap } from '@/config/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path && path !== 'docs');
  
  const breadcrumbs = paths.map((path, index) => {
    const displayName = pathMap[path] || path;
    const isLast = index === paths.length - 1;
    
    return (
      <div key={path} className="flex items-center">
        <span className={`${isLast ? 'text-gray-900' : 'text-gray-500'} text-sm`}>
          {displayName}
        </span>
        {!isLast && (
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        )}
      </div>
    );
  });

  return (
    <div className="flex items-center py-4 px-8 text-sm">
      {breadcrumbs}
    </div>
  );
} 
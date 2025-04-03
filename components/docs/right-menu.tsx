'use client';

import { useToc } from './toc-context';
import Image from 'next/image';

export default function RightMenu() {
  const { items } = useToc();

  // 过滤掉不想显示的项目
  const filteredItems = items.filter(item => 
    !['产品与服务', '开发者资源', '关于我们'].includes(item.title)
  );

  // 滚动到顶部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="py-6 px-6 sticky top-0">
      <h2 className="text-sm font-medium text-purple-600 mb-4">本页导航</h2>
      
      {filteredItems.length > 0 ? (
        <>
          <ul className="space-y-2">
            {filteredItems.map((item, index) => {
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
                    className={`
                      text-[13px] hover:text-purple-600 block leading-5
                      ${item.level === 1 ? 'font-medium text-gray-700' : 'text-gray-500'}
                    `}
                  >
                    {item.title || `Heading ${index + 1}`}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* 分隔线和回到顶部按钮 */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-500 hover:text-gray-700 text-sm transition-colors"
              aria-label="回到顶部"
            >
              <span>回顶部</span>
              <Image 
                src="/img/back-to-top.png" 
                alt="回到顶部" 
                width={18} 
                height={18} 
                className="ml-1"
              />
            </button>
          </div>
        </>
      ) : (
        <p className="text-[13px] text-gray-400 italic">当前页面没有标题</p>
      )}
    </nav>
  );
}

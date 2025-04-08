'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import LeftMenu from '@/components/docs/left-menu';
import RightMenu from '@/components/docs/right-menu';
import Header from '@/components/docs/Header';
import Footer from '@/components/docs/Footer';
import { TocProvider, useToc } from '@/components/docs/toc-context';
import { X, Search } from 'lucide-react';

// 包装组件，用于使用TocContext
function DocsLayoutInner({
  children
}: {
  children: React.ReactNode;
}) {
  const { isTocOpen, setTocOpen } = useToc();
  
  // 添加状态控制左侧菜单在移动端的展开/收起
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // 添加状态跟踪当前屏幕尺寸
  const [isMobile, setIsMobile] = useState(false);
  
  // 监听窗口大小变化
  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        // 在大屏幕上自动展开侧边栏
        if (window.innerWidth >= 768) {
          setSidebarOpen(true);
        } else {
          setSidebarOpen(false);
          setTocOpen(false);
        }
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
  }, [setTocOpen]);
  
  // 切换左侧菜单的展开/收起
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    // 关闭另一个菜单以避免冲突
    if (!isSidebarOpen && isTocOpen) {
      setTocOpen(false);
    }
  };
  
  // 切换右侧目录的展开/收起
  const toggleToc = () => {
    setTocOpen(!isTocOpen);
    // 只在移动端关闭另一个菜单以避免冲突，但不要自动切换当前菜单状态
    if (isMobile && !isTocOpen && isSidebarOpen) {
      setSidebarOpen(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header toggleSidebar={toggleSidebar} toggleToc={toggleToc} />
      
      <div className="flex flex-grow relative">
        {/* 左侧菜单 - 移动端时添加固定定位覆盖层 */}
        <aside 
          className={`${
            isMobile
              ? `fixed z-10 top-14 bottom-0 left-0 transition-transform duration-300 ease-in-out bg-white ${
                  isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`
              : 'relative w-91 shrink-0'
          } md:w-91 md:shrink-0`}
        >
          <div className="h-full md:sticky md:top-[64px] md:max-h-[calc(100vh-64px)] w-80 md:w-91 overflow-y-auto pl-4 md:pl-30">
            {/* 移动端菜单头部搜索框 */}
            {isMobile && isSidebarOpen && (
              <div className="pt-4 pb-2 px-2 sticky top-0 bg-white z-10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="搜索文档..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-0"
                  />
                </div>
                <button
                  className="absolute right-4 top-4 p-1 text-gray-500 hover:text-gray-700 z-20"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="关闭菜单"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
            
            <LeftMenu />
          </div>
        </aside>
        
        {/* 移动端侧边栏打开时的暗色蒙层 */}
        {isMobile && (isSidebarOpen || isTocOpen) && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[5]" 
            onClick={() => {
              setSidebarOpen(false);
              setTocOpen(false);
            }}
            aria-hidden="true"
          />
        )}
        
        {/* 主内容区域 */}
        <main className="flex-1 min-w-0 overflow-visible px-4 md:px-0 lg:px-0 py-1 bg-white">
          {children}
        </main>
        
        {/* 右侧目录 - 在移动端也是固定定位覆盖层 */}
        <aside 
          className={`${
            isMobile
              ? `fixed z-10 top-14 bottom-0 right-0 transition-transform duration-300 ease-in-out bg-white ${
                  isTocOpen ? 'translate-x-0' : 'translate-x-full'
                }`
              : 'w-64 shrink-0 hidden lg:block'
          }`}
        >
          <div className={`${
            isMobile 
              ? 'h-full w-80 overflow-y-auto'
              : 'sticky top-[64px] max-h-[calc(100vh-64px)] w-64 overflow-y-auto'
          }`}>
            {/* 移动端目录头部 */}
            {isMobile && isTocOpen && (
              <div className="pt-4 pb-2 px-4 sticky top-0 bg-white z-10 flex justify-between items-center">
                <h3 className="font-medium text-gray-900">目录</h3>
                <button
                  className="p-1 text-gray-500 hover:text-gray-700"
                  onClick={() => setTocOpen(false)}
                  aria-label="关闭目录"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
            
            <RightMenu />
          </div>
        </aside>
      </div>
      
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

// 主布局组件
export default function DocsLayout({
  children,
  params: _
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <TocProvider>
      <DocsLayoutInner>
        {children}
      </DocsLayoutInner>
    </TocProvider>
  );
} 
import LeftMenu from '@/components/docs/left-menu';
import RightMenu from '@/components/docs/right-menu';
import Header from '@/components/docs/Header';
import Footer from '@/components/docs/Footer';
import { TocProvider } from '@/components/docs/toc-context';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header />
      
      <div className="flex flex-grow">
        {/* 左侧菜单 */}
        <aside className="w-91 shrink-0">
          <div className="sticky top-[64px] max-h-[calc(100vh-64px)] w-91 border-r border-gray-200 overflow-y-auto pl-30">
            <LeftMenu />
          </div>
        </aside>
        
        <TocProvider>
          {/* 主内容区域 */}
          <main className="flex-1 min-w-0 overflow-visible">
            {children}
          </main>
          
          {/* 右侧目录 */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="sticky top-[64px] max-h-[calc(100vh-64px)] w-64 border-l border-gray-200 overflow-y-auto">
              <RightMenu />
            </div>
          </aside>
        </TocProvider>
      </div>
      
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
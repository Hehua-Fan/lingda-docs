import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 pl-30">
          <Link href="/" className="flex items-center space-x-3">
            <span className="font-medium text-gray-900">灵搭平台使用文档</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-8">
          <div className="w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="搜索文档..."
                className="w-full rounded-full border border-gray-200 bg-gray-50/50 py-1.5 pl-10 pr-4 text-sm outline-none focus:border-gray-300 focus:bg-white focus:ring-0"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <kbd className="hidden rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:inline-block">⌘K</kbd>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://autoagents.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            前往灵搭平台
          </a>
        </div>
      </div>
    </header>
  );
}

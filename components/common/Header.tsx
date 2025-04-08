import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                MCP Platform
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/docs" 
              className="text-gray-600 hover:text-[#3171de] transition-colors duration-200"
            >
              文档
            </Link>
            <Link 
              href="/examples" 
              className="text-gray-600 hover:text-[#3171de] transition-colors duration-200"
            >
              示例
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-600 hover:text-[#3171de] transition-colors duration-200"
            >
              价格
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitcher />
            <button 
              type="button"
              className="text-gray-500 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100/80"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
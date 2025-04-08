'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' }
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 从 pathname 中获取当前语言
  const getCurrentLanguage = () => {
    const pathSegments = pathname?.split('/') || [];
    const langCode = pathSegments[1];
    return languages.find(lang => lang.code === langCode) || languages[0];
  };

  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (langCode: string) => {
    // 构建新的 URL 路径
    const pathSegments = pathname?.split('/') || [];
    if (pathSegments[1]) {
      pathSegments[1] = langCode;
    } else {
      pathSegments.splice(1, 0, langCode);
    }
    const newPath = pathSegments.join('/') || `/${langCode}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-[#e7e9fb] transition-colors duration-200 cursor-pointer"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
          {languages.map((language) => {
            const isSelected = language.code === currentLanguage.code;
            return (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-left hover:bg-[#e7e9fb] transition-colors duration-200 cursor-pointer"
              >
                <span className="text-base">{language.flag}</span>
                <span className={isSelected ? 'text-[#4e47ec] font-medium' : 'text-gray-600'}>
                  {language.name}
                </span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#4e47ec] ml-auto" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 
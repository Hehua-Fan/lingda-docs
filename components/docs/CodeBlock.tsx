'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface CodeBlockProps {
  language: string;
  value: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 格式化语言名称显示
  const displayLanguage = () => {
    const langMap: { [key: string]: string } = {
      js: 'JavaScript',
      jsx: 'JSX',
      ts: 'TypeScript',
      tsx: 'TSX',
      html: 'HTML',
      css: 'CSS',
      json: 'JSON',
      md: 'Markdown',
      bash: 'Bash',
      sh: 'Shell',
    };

    return langMap[language] || language.charAt(0).toUpperCase() + language.slice(1);
  };

  return (
    <div className="my-6 overflow-hidden border-0">
      {/* 标题栏 - 保持灰色边框 */}
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center rounded-t-md border border-gray-200 border-b-0">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-gray-600">{displayLanguage()}</span>
          {title && (
            <>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">{title}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded border border-gray-300 hover:bg-gray-200 focus:outline-none transition-colors duration-200 cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-gray-600" />
          ) : (
            <div className="relative h-4 w-4 cursor-pointer">
              <Image 
                src="/img/copy.png" 
                alt="Copy" 
                width={16} 
                height={16} 
                className="object-contain"
              />
            </div>
          )}
        </button>
      </div>
      
      {/* 代码区域 - 黑色边框只有下方圆角 */}
      <div className="border border-black rounded-b-md overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, borderRadius: 0 }}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock; 
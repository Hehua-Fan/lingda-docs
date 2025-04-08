'use client';

import React from 'react';
import Image from 'next/image';

interface HeadingWithAnchorProps {
  id: string;
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

const HeadingWithAnchor: React.FC<HeadingWithAnchorProps> = ({
  id,
  level,
  children,
  className = '',
}) => {
  // Copy URL to clipboard with anchor
  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.href.split('#')[0]}#${id}`;
      navigator.clipboard.writeText(url);
      
      // You could add a toast notification here if you have one
    }
  };
  
  // Custom scroll to account for header height
  const scrollToHeading = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        // Header height (64px)
        const headerHeight = 64;
        
        // Calculate position accounting for header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;
        
        // Smooth scroll to element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  const baseClasses = {
    1: "text-3xl font-semibold mb-4 mt-10",
    2: "text-2xl font-medium mt-8 mb-4",
    3: "text-xl font-medium mt-6 mb-4",
  };
  
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3';
  
  return (
    <div className="group relative">
      <HeadingTag
        id={id}
        className={`${baseClasses[level]} ${className}`}
      >
        {children}
        <a 
          href={`#${id}`}
          className={`ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#6c727f] hover:text-[#3171de]`}
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard();
            
            // Update URL hash without the default scroll behavior
            history.pushState(null, '', `#${id}`);
            
            // Custom scroll with header offset
            scrollToHeading();
          }}
          title="复制链接到剪贴板"
        >
          <Image 
            src="/img/hash_link.svg" 
            alt="#" 
            width={level === 1 ? 20 : level === 2 ? 18 : 16} 
            height={level === 1 ? 20 : level === 2 ? 18 : 16}
            className="inline-block"
          />
        </a>
      </HeadingTag>
      {level === 1 && <hr className="border-t border-gray-300 my-4" />}
    </div>
  );
};

export default HeadingWithAnchor; 
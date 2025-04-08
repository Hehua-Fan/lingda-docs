'use client';

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';
import { useToc } from './toc-context';
import type { Components } from 'react-markdown';
import Image from 'next/image';
import HeadingWithAnchor from './HeadingWithAnchor';

interface MarkdownRendererProps {
  content: string;
}

// 用于生成稳定ID的函数
function generateStableId(text: string, position: number): string {
  if (!text) return `heading-empty-${position}`;
  
  // 移除HTML标签
  const plainText = text.replace(/<[^>]*>/g, '');
  
  // 使用原始文本，但确保它可以作为有效的ID和URL
  // 这会保留大部分原始文本，但替换URL中不安全的字符
  return encodeURIComponent(plainText);
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { updateItems } = useToc();
  
  // 预处理内容，识别附件语法
  // 格式为: [attachment:文件名](/path/to/file.pdf)
  const processedContent = content.replace(
    /\[attachment:(.*?)\]\((.*?)\)/g, 
    '[$1]($2){.attachment}'
  );
  
  // 收集文档中的所有标题（仅在客户端执行）
  useEffect(() => {
    // 在渲染后收集标题是比较可靠的方法
    const collectHeadings = () => {
      const headings = document.querySelectorAll('h1, h2, h3');
      const tocItems = Array.from(headings).map((heading, index) => {
        // 获取ID，如果没有则使用索引作为后备
        const id = heading.id || `heading-${index}`;
        return {
          id,
          title: heading.textContent || `Heading ${index + 1}`,
          level: parseInt(heading.tagName.charAt(1))
        };
      });
      
      // 只在有标题时更新 TOC
      if (tocItems.length > 0) {
        updateItems(tocItems);
      }
    };
    
    // 稍微延迟以确保 DOM 已更新
    const timer = setTimeout(collectHeadings, 100);
    return () => clearTimeout(timer);
  }, [processedContent, updateItems]);
  
  // 处理初始加载时的哈希滚动，考虑header高度
  useEffect(() => {
    // 延迟执行，确保DOM已经完全加载
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const id = decodeURIComponent(window.location.hash.substring(1));
        const element = document.getElementById(id);
        
        if (element) {
          // Header高度
          const headerHeight = 64;
          
          // 计算元素距离顶部的位置，并减去header高度
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;
          
          // 滚动到该位置
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [processedContent]); // 当内容变化时重新执行
  
  // 预处理Markdown内容，提取所有标题
  const headings: {text: string, level: number, position: number}[] = [];
  
  try {
    // 提取标题
    const headerRegex = /^(#{1,3})\s+(.+)$/gm;
    let match;
    let position = 0;
    
    while ((match = headerRegex.exec(processedContent)) !== null) {
      // 通过 # 的数量确定标题级别
      const level = match[1].length; // H1=1, H2=2, H3=3
      const text = match[2].trim();
      headings.push({text, level, position});
      position++;
    }
  } catch (e) {
    console.warn('无法预处理标题:', e);
  }

  // 定义组件覆盖
  const components: Components = {
    // @ts-expect-error react-markdown types don't match our usage
    code({ inline, className, children, ...props }) {
      // 内联代码 (单个反引号包裹的内容)
      if (inline) {
        // 使用图片中所示的样式
        return (
          <span className="text-[#2e3c4f] font-mono bg-[#f1f2f4] px-3 py-1.5 rounded-[30px] text-base" {...props}>
            {children}
          </span>
        );
      }

      // 代码块 (三个反引号包裹的内容)
      // 如果指定了语言，则使用语法高亮
      const match = /language-(\w+)/.exec(className || '');
      
      // 检查代码块内容，如果只有一个简单的词或短语，可能是误识别的内联代码
      const codeContent = String(children).trim();
      if (codeContent.indexOf('\n') === -1 && codeContent.length < 30 && !match) {
        // 将其作为内联代码处理，使用与内联代码相同的样式
        return (
          <span className="text-[#2e3c4f] font-mono bg-[#f1f2f4] px-1 py-1 rounded text-base border border-[#e2e8f0] shadow-sm" {...props}>
            {children}
          </span>
        );
      }
      
      // 非内联代码块总是作为单独的元素处理，不能嵌套在段落内
      // 使用简单的 code 和 pre 元素避免嵌套问题
      if (!match) {
        return (
          <code className="not-prose block my-4 bg-[#1e1e1e] text-white p-4 rounded-md overflow-x-auto text-sm font-mono" {...props}>
            {children}
          </code>
        );
      }
      
      const language = match[1];
      
      // 检查是否有标题 (通过注释的方式: ```js:title)
      let title = '';
      if (language.includes(':')) {
        const parts = language.split(':');
        title = parts[1] || '';
      }
      
      return (
        <CodeBlock 
          language={language.split(':')[0]} 
          value={String(children).trim()}
          title={title}
        />
      );
    },
    
    // 可以自定义其他 Markdown 元素的渲染
    h1(props) {
      const { children } = props;
      // 寻找匹配的预处理标题
      const text = String(children || '');
      const headingIndex = headings.findIndex(h => h.level === 1 && h.text === text);
      const position = headingIndex !== -1 ? headings[headingIndex].position : 0;
      
      // 使用位置信息生成稳定ID
      const id = generateStableId(text, position);
      
      return <HeadingWithAnchor id={id} level={1}>{children}</HeadingWithAnchor>;
    },
    h2(props) {
      const { children } = props;
      // 寻找匹配的预处理标题
      const text = String(children || '');
      const headingIndex = headings.findIndex(h => h.level === 2 && h.text === text);
      const position = headingIndex !== -1 ? headings[headingIndex].position : 0;
      
      // 使用位置信息生成稳定ID
      const id = generateStableId(text, position);
      
      return <HeadingWithAnchor id={id} level={2}>{children}</HeadingWithAnchor>;
    },
    h3(props) {
      const { children } = props;
      // 寻找匹配的预处理标题
      const text = String(children || '');
      const headingIndex = headings.findIndex(h => h.level === 3 && h.text === text);
      const position = headingIndex !== -1 ? headings[headingIndex].position : 0;
      
      // 使用位置信息生成稳定ID
      const id = generateStableId(text, position);
      
      return <HeadingWithAnchor id={id} level={3}>{children}</HeadingWithAnchor>;
    },
    ul(props) {
      return <ul className="list-disc pl-6.5 mb-4 space-y-2 font-light" {...props} />;
    },
    ol(props) {
      return <ol className="list-decimal pl-6.5 mb-4 space-y-2 font-light" {...props} />;
    },
    li(props) {
      return <li className="text-black mt-2 mb-2 font-light" {...props} />;
    },
    blockquote(props) {
      return <blockquote className="border-l-4 border-[#e6e9fd] pl-4 italic text-gray-700 my-4 font-light" {...props} />;
    },
    table(props) {
      return (
        <div className="overflow-x-auto my-8 border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white" {...props} />
        </div>
      );
    },
    thead(props) {
      return <thead className="bg-gray-50" {...props} />;
    },
    th(props) {
      return (
        <th 
          className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border-b border-gray-200"
          {...props}
        />
      );
    },
    td(props) {
      // 检查是否是第一列
      const isFirstColumn = props.children && 
        Array.isArray(props.children) && 
        props.children[0]?.props?.node?.position?.start?.column === 1;
      
      return (
        <td 
          className={`px-6 py-4 text-sm text-gray-600 border-b border-gray-100 hover:bg-gray-50 ${
            isFirstColumn ? 'whitespace-nowrap min-w-[160px] w-[160px] flex-shrink-0 overflow-hidden text-ellipsis' : 'whitespace-pre-wrap'
          }`}
          style={isFirstColumn ? { width: '160px', minWidth: '160px', flexShrink: 0 } : undefined}
          {...props}
        />
      );
    },
    img(props) {
      return (
        <Image
          src={props.src || ''}
          alt={props.alt || ''}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] my-4 w-auto h-auto"
          priority={false}
        />
      );
    },
    a(props) {
      return <a className="text-[#4f47f5] underline decoration-[1px] underline-offset-3 hover:text-[#4f47f5]/80 hover:no-underline" {...props} />;
    },
    p(props) {
      return <p className="mb-4 text-black leading-7 font-light" {...props} />;
    },
    strong(props) {
      return <strong className="font-semibold" {...props} />;
    },
  };
  
  return (
    <div className="markdown-body" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 
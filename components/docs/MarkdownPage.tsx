'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MarkdownRenderer from './MarkdownRenderer';
import Breadcrumb from './Breadcrumb';
import LoadingSpinner from '../common/LoadingSpinner';

interface MarkdownPageProps {
  markdownPath?: string; // 可选的指定 Markdown 文件路径
  hideTitle?: boolean;   // 控制是否隐藏标题
}

interface Frontmatter {
  title?: string;
  description?: string;
  hideTitle?: boolean;
  [key: string]: unknown;
}

export default function MarkdownPage({ markdownPath, hideTitle = false }: MarkdownPageProps) {
  const pathname = usePathname();
  const [content, setContent] = useState<string>('');
  const [frontmatter, setFrontmatter] = useState<Frontmatter>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 如果没有提供 markdownPath，则根据当前路由自动生成路径
        // 例如 /docs/features/database 将加载 markdown/docs/features/database.md
        const path = markdownPath || pathname.replace(/^\//, '');
        
        const response = await fetch(`/api/markdown?path=${encodeURIComponent(path)}`);
        
        if (!response.ok) {
          throw new Error('Failed to load markdown content');
        }
        
        const data = await response.json();
        setContent(data.content);
        setFrontmatter(data.frontmatter);
      } catch (err) {
        console.error('Error loading markdown:', err);
        setError('加载文档内容失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [pathname, markdownPath]);

  return (
    <div>
      <Breadcrumb />
      <article className="prose prose-slate max-w-3xl mx-auto px-8 py-10">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size={50} color="#8B5CF6" thickness={4} />
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            {!hideTitle && (
              <h1 className="text-3xl font-semibold mb-6">
                {frontmatter.title || '文档'}
              </h1>
            )}
            <MarkdownRenderer content={content} />
          </>
        )}
      </article>
    </div>
  );
} 
import { getMarkdownContent } from '@/lib/markdown';
import MarkdownPage from '@/components/docs/MarkdownPage';
import { notFound } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DocPage({ params }: any) {
  try {
    // 处理不同路径的逻辑
    let path;
    if (!params.slug || params.slug.length === 0) {
      // 处理 /docs 路径 (无 slug)
      path = 'index.md';
    } else {
      // 处理其他路径
      path = `${params.slug.join('/')}`;
    }
    
    const { content, frontmatter } = await getMarkdownContent(path);

    if (!content || content === '文件加载失败') {
      return notFound();
    }

    // 使用前端组件渲染，并根据frontmatter中的hideTitle属性决定是否隐藏标题
    return <MarkdownPage markdownPath={path} hideTitle={frontmatter.hideTitle === true} />;
  } catch (error) {
    console.error('Error loading markdown:', error);
    return notFound();
  }
} 
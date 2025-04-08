import { getMarkdownContent } from '@/lib/markdown';
import MarkdownPage from '@/components/docs/MarkdownPage';
import { notFound, redirect } from 'next/navigation';
import { Locale } from '@/i18n/locale';

// 移除自定义接口，使用更灵活的类型
export default async function DocPage({ 
  params 
}: { 
  params: { slug?: string[]; locale: string } 
}) {
  try {
    // 直接使用解构获取参数
    const { slug, locale } = params;
    
    // 处理不同路径的逻辑
    let path;
    if (!slug || slug.length === 0) {
      // 重定向到快速开始页面
      redirect(`/${locale}/docs/getting-started`);
    } else {
      // 处理其他路径
      path = `${slug.join('/')}`;
    }
    
    // 加入语言前缀，从对应语言目录加载内容
    const localizedPath = `${locale}/${path}`;
    
    const { content, frontmatter } = await getMarkdownContent(localizedPath);

    if (!content || content === '文件加载失败') {
      return notFound();
    }

    // 使用前端组件渲染，并根据frontmatter中的hideTitle属性决定是否隐藏标题
    return <MarkdownPage markdownPath={localizedPath} hideTitle={frontmatter.hideTitle === true} />;
  } catch (error) {
    console.error('Error loading markdown:', error);
    return notFound();
  }
} 
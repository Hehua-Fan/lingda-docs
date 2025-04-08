import { getMarkdownContent } from '@/lib/markdown';
import MarkdownPage from '@/components/docs/MarkdownPage';
import { notFound, redirect } from 'next/navigation';
import { Locale } from '@/i18n/locale';

// 使用Props类型并标记为异步
type DocPageProps = {
  params: {
    slug?: string[];
    locale: string;
  };
};

export default async function DocPage({ params }: DocPageProps) {
  try {
    // 确保params已经加载完成
    const slugValue = params?.slug || [];
    const localeValue = params?.locale as Locale || 'zh';
    
    // 处理不同路径的逻辑
    if (!slugValue.length) {
      // 重定向到快速开始页面
      redirect(`/${localeValue}/docs/getting-started`);
    }
    
    // 处理其他路径
    const path = slugValue.join('/');
    
    // 加入语言前缀，从对应语言目录加载内容
    const localizedPath = `${localeValue}/${path}`;
    
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
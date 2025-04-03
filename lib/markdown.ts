import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Markdown 文件根目录
const MARKDOWN_DIR = path.join(process.cwd(), 'markdown');

/**
 * 读取指定路径的 Markdown 文件内容
 * @param filePath 相对于 markdown 目录的文件路径
 * @returns 包含元数据和内容的对象
 */
export async function getMarkdownContent(filePath: string) {
  // 确保路径以 .md 结尾
  const fullPath = path.join(MARKDOWN_DIR, filePath.endsWith('.md') ? filePath : `${filePath}.md`);
  
  try {
    // 读取文件内容
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // 使用 gray-matter 解析 frontmatter 和内容
    const { data, content } = matter(fileContents);
    
    return {
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading Markdown file at ${fullPath}:`, error);
    return {
      frontmatter: {},
      content: '文件加载失败',
    };
  }
}

/**
 * 获取指定目录下的所有 Markdown 文件列表
 * @param dirPath 相对于 markdown 目录的目录路径
 * @returns Markdown 文件列表
 */
export async function getMarkdownFiles(dirPath: string = '') {
  const fullPath = path.join(MARKDOWN_DIR, dirPath);
  
  try {
    const files = fs.readdirSync(fullPath);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        slug: file.replace(/\.md$/, ''),
        path: path.join(dirPath, file),
      }));
  } catch (error) {
    console.error(`Error reading directory at ${fullPath}:`, error);
    return [];
  }
} 
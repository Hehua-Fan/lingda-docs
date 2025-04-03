import { NextRequest, NextResponse } from 'next/server';
import { getMarkdownContent } from '@/lib/markdown';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json(
      { error: 'Path parameter is required' },
      { status: 400 }
    );
  }

  try {
    const { content, frontmatter } = await getMarkdownContent(path);
    
    return NextResponse.json({
      content,
      frontmatter,
    });
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return NextResponse.json(
      { error: 'Failed to load markdown content' },
      { status: 500 }
    );
  }
} 
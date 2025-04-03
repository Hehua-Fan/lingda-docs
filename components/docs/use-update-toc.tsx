'use client';

import { useEffect } from 'react';
import { useToc } from './toc-context';

export function useUpdateToc() {
  const { updateItems } = useToc();

  useEffect(() => {
    const headings = document.querySelectorAll('h2[id]');
    const items = Array.from(headings).map((heading) => ({
      title: heading.textContent || '',
      id: heading.id,
      level: parseInt(heading.tagName.charAt(1)) // 确保有 level 属性
    }));
    updateItems(items);
  }, [updateItems]);
} 
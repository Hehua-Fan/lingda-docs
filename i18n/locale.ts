// 不需要导入 NextRouter，因为我们只使用纯函数

export const locales = ['zh', 'en', 'jp'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

// 国际化路由配置
export const i18n = {
  locales: locales as unknown as string[],
  defaultLocale,
};

// 获取当前语言的函数
export function getLocale(pathname: string): Locale {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  return defaultLocale;
}

// 切换语言链接
export function getAlternateLinks(pathname: string): Record<Locale, string> {
  const result: Partial<Record<Locale, string>> = {};
  
  // 移除当前语言前缀（如果存在）
  let path = pathname;
  const currentLocale = getLocale(pathname);
  
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      path = pathname.substring(locale.length + 1);
      break;
    } else if (pathname === `/${locale}`) {
      path = '/';
      break;
    }
  }

  // 确保路径以 / 开头
  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  // 为每种语言生成链接，确保总是生成完整路径
  for (const locale of locales) {
    // 始终生成完整路径，包括语言前缀，即使是默认语言
    result[locale] = locale === defaultLocale && path === '/' 
      ? `/${locale}` 
      : `/${locale}${path}`;
  }

  return result as Record<Locale, string>;
}

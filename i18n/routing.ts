import { NextRequest } from 'next/server';
import { defaultLocale, i18n, locales } from './locale';

// 用于中间件的国际化路由处理
export async function handleI18nRouting(request: NextRequest) {
  // 检查是否需要重定向到本地化路径
  const pathname = request.nextUrl.pathname;
  
  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return; // 已有语言前缀，不需要重定向
  
  // 从请求中获取首选语言
  const locale = getLocaleFromRequest(request) || defaultLocale;
  
  // 如果是默认语言，不添加前缀
  if (locale === defaultLocale) return;
  
  // 重定向到带有语言前缀的路径
  const newUrl = new URL(
    `/${locale}${pathname}${request.nextUrl.search}`,
    request.url
  );
  
  return Response.redirect(newUrl);
}

// 从请求中获取首选语言
function getLocaleFromRequest(request: NextRequest): string | undefined {
  // 首先尝试从Cookie中获取
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale;
  }
  
  // 然后尝试从请求头获取
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',')
      .map(lang => lang.split(';')[0].trim());
    
    // 查找匹配的语言
    for (const parsedLocale of parsedLocales) {
      const locale = parsedLocale.substring(0, 2);
      if (locales.includes(locale as any)) {
        return locale;
      }
    }
  }
  
  return undefined;
}

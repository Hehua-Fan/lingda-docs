import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/locale';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 如果是静态资源，不处理
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // 处理根路径，直接重定向到中文的快速开始页面
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/zh/docs/getting-started', request.url));
  }
  
  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // 从请求中获取首选语言
  const locale = getLocaleFromRequest(request) || defaultLocale;
  
  // 构建新的URL
  const newUrl = new URL(
    `/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}${request.nextUrl.search}`,
    request.url
  );
  
  return NextResponse.redirect(newUrl);
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

// 设置中间件匹配的路径
export const config = {
  // 匹配所有页面路径
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|imgs|img|public|assets).*)'],
}; 
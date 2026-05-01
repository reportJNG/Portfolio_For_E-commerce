import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '@/lib/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
};

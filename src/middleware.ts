import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match pathnames for all three languages
  matcher: ['/', '/(lt|en|ru)/:path*']
};
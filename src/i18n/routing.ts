import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // Visos palaikomos kalbos
  locales: ['lt', 'en', 'ru'],
 
  // Numatytoji kalba
  defaultLocale: 'lt'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
// components/Navigation.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navigation() {
 const t = useTranslations('nav');
 const locale = useLocale();

 return (
   <div className="hidden md:flex space-x-4">
     <Link 
       href="/"
       locale={locale} 
       className="text-gray-600 hover:text-gray-900"
     >
       {t('home')}
     </Link>
     <Link 
       href="/services"
       locale={locale}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('services')}
     </Link>
     <Link 
       href="/about"
       locale={locale}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('about')}
     </Link>
     <Link 
       href="/contacts"
       locale={locale}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('contact')}
     </Link>
   </div>
 );
}
// components/MobileMenu.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface MobileMenuProps {
 isOpen: boolean;
 onLinkClick: () => void;
 menuRef: React.RefObject<HTMLDivElement>;
}

export function MobileMenu({ isOpen, onLinkClick, menuRef }: MobileMenuProps) {
 const t = useTranslations('nav');
 const locale = useLocale();

 if (!isOpen) return null;

 return (
   <div 
     ref={menuRef}
     className="fixed top-16 right-0 md:hidden bg-white shadow-lg z-50 w-48 py-2 rounded-bl-lg"
   >
     <nav className="flex flex-col">
       <Link 
         href="/" 
         locale={locale}
         className="px-4 py-2 text-gray-600 hover:bg-gray-100" 
         onClick={onLinkClick}
       >
         {t('home')}
       </Link>
       <Link 
         href="/services" 
         locale={locale}
         className="px-4 py-2 text-gray-600 hover:bg-gray-100" 
         onClick={onLinkClick}
       >
         {t('services')}
       </Link>
       <Link 
         href="/about" 
         locale={locale}
         className="px-4 py-2 text-gray-600 hover:bg-gray-100" 
         onClick={onLinkClick}
       >
         {t('about')}
       </Link>
       <Link 
         href="/contacts" 
         locale={locale}
         className="px-4 py-2 text-gray-600 hover:bg-gray-100" 
         onClick={onLinkClick}
       >
         {t('contact')}
       </Link>
     </nav>
   </div>
 );
}
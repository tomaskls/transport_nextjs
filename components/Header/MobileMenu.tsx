// components/MobileMenu.tsx
'use client';

import { useTranslations } from 'next-intl';
import type { RefObject } from 'react';

interface MobileMenuProps {
 isOpen: boolean;
 onLinkClick: () => void;
 menuRef: RefObject<HTMLDivElement | null>;
}

export function MobileMenu({ isOpen, onLinkClick, menuRef }: MobileMenuProps) {
 const t = useTranslations('nav');

 const scrollToSection = (id: string) => {
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
     onLinkClick();
   }
 };

 if (!isOpen) return null;

 return (
   <div 
     ref={menuRef}
     className="fixed top-16 right-0 md:hidden bg-white shadow-lg z-50 w-48 py-2 rounded-bl-lg"
   >
     <nav className="flex flex-col">
       
       
       <button 
         className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-left" 
         onClick={() => scrollToSection('about')}
       >
         {t('about')}
       </button>
       <button 
         className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-left" 
         onClick={() => scrollToSection('services')}
       >
         {t('services')}
       </button>
       <button 
         className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-left" 
         onClick={() => scrollToSection('contacts')}
       >
         {t('contact')}
       </button>
     </nav>
   </div>
 );
}
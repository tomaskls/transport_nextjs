// components/Navigation.tsx
'use client';

import { useTranslations } from 'next-intl';

export function Navigation() {
 const t = useTranslations('nav');

 const scrollToSection = (id: string) => {
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
 };

 return (
   <div className="hidden md:flex space-x-4">
     <button 
       onClick={() => scrollToSection('about')}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('home')}
     </button>
     <button 
       onClick={() => scrollToSection('services')}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('services')}
     </button>
     
     <button 
       onClick={() => scrollToSection('contacts')}
       className="text-gray-600 hover:text-gray-900"
     >
       {t('contact')}
     </button>
   </div>
 );
}
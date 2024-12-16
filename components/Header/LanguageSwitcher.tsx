// components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { LanguageButton } from './LanguageButton';
import { Language } from '../../types/languages';

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Language;

  return (
    <div className="flex space-x-2">
      <LanguageButton 
        lang="lt" 
        isActive={currentLocale === 'lt'} 
      />
      <LanguageButton 
        lang="en" 
        isActive={currentLocale === 'en'} 
      />
      <LanguageButton 
        lang="ru" 
        isActive={currentLocale === 'ru'} 
      />
    </div>
  );
}
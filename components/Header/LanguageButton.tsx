'use client';
import { Link, usePathname } from '@/i18n/routing'; 
import { Language } from '../../types/languages';

interface LanguageButtonProps {
  lang: Language;
  isActive: boolean;
}

export function LanguageButton({ lang, isActive }: LanguageButtonProps) {
  const pathname = usePathname();

  return (
    <Link 
      href={pathname}
      locale={lang}
      className={`px-2 py-1 text-sm font-medium text-gray-800 ${
        isActive ? 'bg-gray-200' : 'hover:bg-gray-200'
      } rounded`}
    >
      {lang.toUpperCase()}
    </Link>
  );
}
// components/LanguageButton.tsx
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Language } from '../../types/languages';


interface LanguageButtonProps {
  lang: Language;
  isActive: boolean;
}

export function LanguageButton({ lang, isActive }: LanguageButtonProps) {
  const params = useParams();
  const path = params.slug ? `/${params.slug}` : '/';

  return (
    <Link 
      href={path}
      locale={lang.toLowerCase()}
      className={`px-2 py-1 text-sm font-medium ${
        isActive ? 'bg-gray-200' : 'hover:bg-gray-200'
      } rounded`}
    >
      {lang}
    </Link>
  );
}
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Metadata} from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale } = await params;
  const t = await getTranslations('metadata');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      images: [
        {
          url: 'https://transport-nextjs-henna.vercel.app/images/Siauliai-Airports-Siauliai.png',
          width: 1200,
          height: 630,
          alt: t('title')
        }
      ]
    }
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
      <link rel="canonical" href={`https://www.siauliai-riga.lt/${locale}`} />
      <link rel="alternate" hrefLang="lt" href="https://www.siauliai-riga.lt/lt" />
      <link rel="alternate" hrefLang="en" href="https://www.siauliai-riga.lt/en" />
      <link rel="alternate" hrefLang="ru" href="https://www.siauliai-riga.lt/ru" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-5D98JQM51J" />
      </body>
    </html>
  );
}
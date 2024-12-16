import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import "./globals.css"
import Footer from "../../../components/Footer"

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <Link href="/about">{t('hero.title')}</Link>
<Footer />    
    </div>
  );
}
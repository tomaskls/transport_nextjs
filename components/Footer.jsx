

import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer'); // pakeista iš 'Footer' į 'footer'
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Šiauliai Transfers</h3>
            <p>{t('description')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t('contacts')}</h3>
            <p>Tel: +37060287970</p>
            <p>email: siauliaitransfers@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Siauliai Transfers  &reg; All rights reserved</p>
           <p>Created by <a href="https://www.tmh.lt" target="_blank" rel="noopener noreferrer">Tomorrow's Media House</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

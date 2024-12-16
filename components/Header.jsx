import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

function LanguageButton({ lang, onClick, active }) {
  return (
    <button 
      className={`px-2 py-1 text-sm font-medium ${active ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded`}
      onClick={() => onClick(lang)}
    >
      {lang}
    </button>
  );
}

LanguageButton.propTypes = {
  lang: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentMetaData, setCurrentMetaData] = useState({});
  const { t, i18n } = useTranslation();
  const menuRef = useRef();
  const buttonRef = useRef();

  // Funkcija titulams pagal kalbą
  const getMetaData = (language) => {
    switch (language) {
      case 'LT':
        return {
          title: 'Oro uosto transportas | Pagrindinis',
          description: 'Patikimas oro uosto transporto paslaugų teikėjas',
          keywords: 'oro uostas, transportas, pervežimas, Lietuva'
        };
      case 'EN':
        return {
          title: 'Airport Transfer | Home',
          description: 'Reliable airport transfer service provider',
          keywords: 'airport, transfer, transportation, Lithuania'
        };
      case 'RU':
        return {
          title: 'Трансфер в аэропорт | Главная',
          description: 'Надежный поставщик услуг трансфера в аэропорт',
          keywords: 'аэропорт, трансфер, транспорт, Литва'
        };
      default:
        return {
          title: 'Airport Transfer | Home',
          description: 'Reliable airport transfer service provider',
          keywords: 'airport, transfer, transportation, Lithuania'
        };
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Stebime kalbos pasikeitimus
  useEffect(() => {
    // Gauname dabartinę kalbą
    const currentLang = i18n.language.toUpperCase();
    console.log('Current language:', currentLang); // Debuginimui
    const newMetaData = getMetaData(currentLang);
    setCurrentMetaData(newMetaData);
  }, [i18n.language]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMobileMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language.toLowerCase()} />
        <title>{currentMetaData.title}</title>
        <meta name="description" content={currentMetaData.description} />
        <meta name="keywords" content={currentMetaData.keywords} />
      </Helmet>

      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800">Oro uosto transportas</a>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.home')}</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.services')}</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.about')}</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.contact')}</a>
            </div>
            <div className="flex space-x-2">
              <LanguageButton lang="LT" onClick={changeLanguage} active={i18n.language.toUpperCase() === 'LT'} />
              <LanguageButton lang="EN" onClick={changeLanguage} active={i18n.language.toUpperCase() === 'EN'} />
              <LanguageButton lang="RU" onClick={changeLanguage} active={i18n.language.toUpperCase() === 'RU'} />
            </div>
            <button 
              ref={buttonRef}
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div 
            ref={menuRef}
            className="fixed top-16 right-0 md:hidden bg-white shadow-lg z-50 w-48 py-2 rounded-bl-lg"
          >
            <nav className="flex flex-col">
              <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>{t('nav.home')}</a>
              <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>{t('nav.services')}</a>
              <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>{t('nav.about')}</a>
              <a href="#contacts" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={handleLinkClick}>{t('nav.contact')}</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
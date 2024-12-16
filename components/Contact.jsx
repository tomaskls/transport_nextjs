import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

    return (
      <section id='contacts' className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <div className="flex flex-col items-center space-y-4">
            <a href="tel:+37060287970" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>{t('contact.call')}
            </a>
            <div className="flex space-x-4">
              <a href="viber://chat?number=%2B37060287970" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
                <i className="fab fa-viber mr-2"></i> Viber
              </a>
              <a href="https://wa.me/37060287970" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
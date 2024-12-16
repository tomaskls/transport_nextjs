import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ServiceCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.airport_transfer'),
      description: t('services.airport_transfer_description')
    },
    {
      title: t('services.airport_pickup'),
      description: t('services.airport_pickup_description')
    },
    {
      title: t('services.group_transfer'),
      description: t('services.group_transfer_description')
    }
  ];

  return (
    <section id='services' className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
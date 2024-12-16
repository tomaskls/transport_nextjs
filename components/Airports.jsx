import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function AirportCard({ name, url, imageUrl, price }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded" />
      {price && <h3 className="text-xl font-semibold mb-4">{price}</h3>}
    </a>
  );
}

AirportCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

function Airports() {
  const { t } = useTranslation();

  const airports = [
    {
      name: t('airports.riga'),
      url: "https://www.riga-airport.com/",
      imageUrl: "/Riga_Airport.webp",
      price: t('airports.riga_price')
    },
    {
      name: t('airports.vilnius'),
      url: "https://www.vno.lt/",
      imageUrl: "/Vilnius_Airport.webp",
      price: t('airports.vilnius_price')
    },
    {
      name: t('airports.kaunas'),
      url: "https://www.kaunas-airport.lt/",
      imageUrl: "/Kauno_airport.webp",
      price: t('airports.kaunas_price')
    }
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('airports.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {airports.map((airport, index) => (
            <AirportCard 
              key={index} 
              name={airport.name} 
              url={airport.url} 
              imageUrl={airport.imageUrl} 
              price={airport.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Airports;
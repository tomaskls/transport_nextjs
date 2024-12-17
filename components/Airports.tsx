
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface AirportCardProps {
 name: string;
 url: string;
 imageUrl: string;
 price?: string;
}

function AirportCard({ name, url, imageUrl, price }: AirportCardProps) {
 return (
   <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
     <h3 className="text-xl font-semibold text-gray-800 mb-4">{name}</h3>
     <div className="relative w-full h-40">
       <Image 
         src={imageUrl} 
         alt={name} 
         fill
         className="object-cover rounded"
       />
     </div>
     {price && <h3 className="text-xl text-gray-800 font-semibold mb-4">{price}</h3>}
   </a>
 );
}

function Airports() {
 const t = useTranslations('airports');

 const airports = [
   {
     name: t('riga'),
     url: "https://www.riga-airport.com/",
     imageUrl: "/images/Riga_Airport.webp",
     price: t('riga_price'),
     width: 400,
     height: 267
   },
   {
     name: t('vilnius'),
     url: "https://www.vno.lt/",
     imageUrl: "/images/Vilnius_Airport.webp",
     price: t('vilnius_price'),
     width: 400,
     height: 300
   },
   {
     name: t('kaunas'),
     url: "https://www.kaunas-airport.lt/",
     imageUrl: "/images/Kauno_airport.webp",
     price: t('kaunas_price'),
     width: 400,
     height: 300
   }
 ];

 return (
   <section className="py-16 bg-gray-200">
     <div className="container mx-auto px-6">
       <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
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
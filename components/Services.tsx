
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
 title: string;
 description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
 return (
   <div className="bg-gray-100 p-6 rounded-lg text-gray-800">
     <h3 className="text-xl font-semibold mb-4">{title}</h3>
     <p>{description}</p>
   </div>
 );
}

function Services() {
 const t = useTranslations('services');

 const services = [
   {
     title: t('airport_transfer'),
     description: t('airport_transfer_description')
   },
   {
     title: t('airport_pickup'), 
     description: t('airport_pickup_description')
   },
   {
     title: t('group_transfer'),
     description: t('group_transfer_description')
   }
 ];

 return (
   <section id='services' className="py-16 bg-white">
     <div className="container mx-auto px-6">
       <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
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
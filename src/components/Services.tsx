
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Fourniture de Matériaux',
    description: 'Matériaux de construction de haute qualité pour tous vos projets',
    image: 'https://www.auffret-materiaux.com/ressources/images/3825600b1f4c.jpg',
  },
  {
    title: 'Solutions Logistiques',
    description: 'Services de livraison et de transport efficaces',
    image: 'https://cdn.globalso.com/oogplus/GENERAL-CARGO-4.jpg',
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Des solutions complètes pour vos besoins en matériaux de construction
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 mt-20 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover rounded-lg shadow-lg"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-lg text-gray-500">{service.description}</p>
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-500"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
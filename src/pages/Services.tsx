
import { Truck, Package, Ruler, Clock, Phone, Shield } from 'lucide-react';

const services = [
  {
    icon: Package,
    image: "https://www.auffret-materiaux.com/ressources/images/3825600b1f4c.jpg",
    title: 'Fourniture de Matériaux',
    description: 'Large gamme de matériaux de construction de haute qualité pour tous vos projets.',
    features: [
      'Gravier et sable calibrés',
      'Pierres naturelles',
      'Granulats concassés',
      'Matériaux spéciaux sur demande'
    ]
  },
  {
    icon: Truck,
    title: 'Livraison',
    image: "https://www.materiauxdubos.com/public/img/medium/445c06ec8c44ff1aafe78425e44a9b37.jpg",
    description: 'Service de livraison fiable et ponctuel pour tous vos besoins en matériaux.',
    features: [
      'Livraison rapide',
      'Suivi en temps réel',
      'Véhicules adaptés',
      'Livraison en vrac'
    ]
  },
  {
    icon: Ruler,
    title: 'Conseil Technique',
    image: "https://new.ibs-entreprise.com/wp-content/uploads/2023/10/IBS-ENTREPRISE-homme-tenant-une-carte-en-gilet-jaune-sur-un-chantier-1536x1024.jpg",
    description: 'Expertise technique pour vous aider à choisir les meilleurs matériaux.',
    features: [
      'Analyse des besoins',
      'Recommandations personnalisées',
      'Support technique',
      'Documentation technique'
    ]
  }
];

const features = [
  {
    icon: Clock,
    title: 'Délais Respectés',
    description: 'Nous nous engageons à respecter les délais convenus pour chaque livraison.'
  },
  {
    icon: Phone,
    title: 'Support 24/7',
    description: 'Notre équipe est disponible pour répondre à vos questions et urgences.'
  },
  {
    icon: Shield,
    title: 'Qualité Garantie',
    description: 'Tous nos matériaux sont testés et certifiés conformes aux normes.'
  }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-16">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80"
            alt="Services"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos Services
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
            Des solutions complètes pour tous vos besoins en matériaux de construction
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-24 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-amber-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    className="rounded-lg shadow-lg"
                    src={service.image}	
                    alt={service.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Pourquoi Nous Choisir
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex justify-center">
                  <feature.icon className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
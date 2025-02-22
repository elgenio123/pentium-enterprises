
import { useParams } from 'react-router-dom';
import { Truck, Package, Shield, Clock, Users } from 'lucide-react';

const services = {
  'fourniture-de-matériaux': {
    title: 'Fourniture de Matériaux',
    description: 'Service complet de fourniture de matériaux de construction de haute qualité',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    features: [
      {
        icon: Package,
        title: 'Produits Diversifiés',
        description: 'Large gamme de matériaux pour tous types de projets'
      },
      {
        icon: Shield,
        title: 'Qualité Garantie',
        description: 'Matériaux conformes aux normes de construction'
      },
      {
        icon: Users,
        title: 'Conseil Expert',
        description: 'Équipe expérimentée pour vous guider'
      }
    ],
    details: [
      {
        title: 'Notre Engagement',
        content: 'Nous nous engageons à fournir des matériaux de la plus haute qualité, adaptés à vos besoins spécifiques. Notre expertise nous permet de vous conseiller sur les meilleurs choix pour votre projet.'
      },
      {
        title: 'Processus',
        steps: [
          'Analyse de vos besoins',
          'Sélection des matériaux appropriés',
          'Contrôle qualité',
          'Livraison sur site'
        ]
      }
    ]
  },
  'solutions-logistiques': {
    title: 'Solutions Logistiques',
    description: 'Service de livraison efficace et fiable pour vos matériaux',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80',
    features: [
      {
        icon: Truck,
        title: 'Livraison Rapide',
        description: 'Service de livraison ponctuel et efficace'
      },
      {
        icon: Clock,
        title: 'Planification Flexible',
        description: 'Horaires adaptés à vos besoins'
      },
      {
        icon: Shield,
        title: 'Sécurité Garantie',
        description: 'Transport sécurisé de vos matériaux'
      }
    ],
    details: [
      {
        title: 'Notre Service',
        content: "Notre service logistique assure une livraison efficace et sécurisée de vos matériaux. Nous disposons d'une flotte moderne et d'une équipe expérimentée."
      },
      {
        title: 'Processus',
        steps: [
          'Planification du transport',
          'Chargement sécurisé',
          'Suivi en temps réel',
          'Livraison sur site'
        ]
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Service non trouvé</h2>
          <p className="mt-2 text-gray-600">Le service que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src={service.image}
            alt={service.title}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
            {service.description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-5 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {service.features.map((feature) => (
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

      {/* Details Section */}
      <div className="py-1">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {service.details.map((detail) => (
            <div key={detail.title} className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">{detail.title}</h2>
              {detail.content && (
                <p className="text-lg text-gray-500">{detail.content}</p>
              )}
              {detail.steps && (
                <div className="mt-8">
                  <div className="space-y-4">
                    {detail.steps.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 text-amber-600">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="ml-3 text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Prêt à commencer?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <div className="mt-8">
            <button className="btn">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
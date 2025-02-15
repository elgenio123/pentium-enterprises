
import { useParams } from 'react-router-dom';

const products = {
  'gravier-de-construction': {
    name: 'Gravier de Construction',
    description: 'Gravier de haute qualité parfait pour les projets de construction',
    specifications: 'Taille: 20-40mm, Densité: 1600kg/m³',
    applications: 'Fondations, Drainage, Aménagement paysager',
    image: 'https://media.istockphoto.com/id/1077978676/photo/excavator-moving-sand-in-a-gravel-pit.jpg?s=1024x1024&w=is&k=20&c=DjQ5VWpa0VPUmpy6I3adHv6IbQjhvepVDP-pforzboU=',
    details: [
      {
        title: 'Caractéristiques',
        items: [
          'Excellente résistance à la compression',
          'Forme angulaire pour une meilleure stabilité',
          'Conforme aux normes de construction',
          'Granulométrie contrôlée'
        ]
      },
      {
        title: 'Utilisations',
        items: [
          'Fondations de bâtiments',
          'Travaux de drainage',
          'Aménagements paysagers',
          'Préparation de béton'
        ]
      }
    ]
  },
  // Add other products...
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Produit non trouvé</h2>
          <p className="mt-2 text-gray-600">Le produit que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full rounded-lg shadow-lg h-96"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-500">{product.description}</p>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Spécifications</h2>
              <p className="mt-2 text-gray-600">{product.specifications}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Applications</h2>
              <p className="mt-2 text-gray-600">{product.applications}</p>
            </div>

            {product.details.map((section) => (
              <div key={section.title} className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 text-amber-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="ml-3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-12">
              <button className="btn">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
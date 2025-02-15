
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'gravier-de-construction',
    name: 'Gravier de Construction',
    description: 'Gravier de haute qualité parfait pour les projets de construction',
    specifications: 'Taille: 20-40mm, Densité: 1600kg/m³',
    applications: 'Fondations, Drainage, Aménagement paysager',
    image: 'https://media.istockphoto.com/id/1077978676/photo/excavator-moving-sand-in-a-gravel-pit.jpg?s=1024x1024&w=is&k=20&c=DjQ5VWpa0VPUmpy6I3adHv6IbQjhvepVDP-pforzboU=',
  },
  {
    id: 'pierre-de-construction',
    name: 'Pierre de Construction',
    description: 'Pierre naturelle pour applications architecturales',
    specifications: 'Taille: Variable, Résistance: 100-150 MPa',
    applications: 'Murs, Façades, Pavage',
    image: 'https://media.istockphoto.com/id/165866996/photo/bricky.jpg?s=1024x1024&w=is&k=20&c=nPats58sSMhvWS1Er7Q2PG9wo5tvwFSejx_g0SfZyFg=',
  },
  {
    id: 'sable-fin',
    name: 'Sable Fin',
    description: 'Sable de qualité supérieure pour diverses utilisations en construction',
    specifications: 'Granulométrie: 0-4mm, Propreté: 95%',
    applications: 'Mortier, Béton, Enduits',
    image: 'https://images.unsplash.com/photo-1618632806137-b8446c70fd9e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'granulats-concasses',
    name: 'Granulats Concassés',
    description: 'Granulats de première qualité pour travaux routiers',
    specifications: 'Taille: 0-31.5mm, LA: <30',
    applications: 'Routes, Parkings, Plateformes',
    image: 'https://plus.unsplash.com/premium_photo-1675543163354-e4dc1f541330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Products = () => {
  return (
    <div className="py-24 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Produits
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Découvrez notre gamme complète de matériaux de construction de haute qualité
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-lg lg:grid lg:grid-cols-2 lg:gap-4"
            >
              <div className="lg:col-span-1">
                <img
                  className="object-cover w-full h-64 lg:h-full"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-8 lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="mt-4 text-gray-500">{product.description}</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Spécifications</h3>
                    <p className="mt-2 text-gray-500">{product.specifications}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Applications</h3>
                    <p className="mt-2 text-gray-500">{product.applications}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn"
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
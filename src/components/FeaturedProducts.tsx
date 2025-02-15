import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Gravier de Construction',
    description: 'Gravier de haute qualité parfait pour les projets de construction',
    image: 'https://media.istockphoto.com/id/1077978676/photo/excavator-moving-sand-in-a-gravel-pit.jpg?s=1024x1024&w=is&k=20&c=DjQ5VWpa0VPUmpy6I3adHv6IbQjhvepVDP-pforzboU=',
  },
  {
    id: 2,
    name: 'Pierre de Construction',
    description: 'Pierre naturelle pour applications architecturales',
    image: 'https://media.istockphoto.com/id/165866996/photo/bricky.jpg?s=1024x1024&w=is&k=20&c=nPats58sSMhvWS1Er7Q2PG9wo5tvwFSejx_g0SfZyFg=',
  },
  {
    id: 3,
    name: 'Sable Fin',
    description: 'Sable de qualité supérieure pour diverses utilisations en construction',
    image: 'https://images.unsplash.com/photo-1618632806137-b8446c70fd9e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Produits Vedettes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Découvrez notre gamme de matériaux de construction de haute qualité
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{product.description}</p>
                </div>
                <div className="mt-6">
                  <Link  to={`/products/${product.name.toLowerCase().replace(/ /g, '-')}`}
                    className="text-base font-semibold text-amber-600 hover:text-amber-500"
                  >
                    En savoir plus →
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

export default FeaturedProducts;
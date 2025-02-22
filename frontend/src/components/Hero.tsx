
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?auto=format&fit=crop&q=80"
          alt="Paysage de carrière"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Matériaux de Construction<br />
          de Qualité Supérieure
        </h1>
        <p className="max-w-3xl mt-6 text-xl text-gray-300">
          Nous fournissons des pierres, graviers et sables de haute qualité pour vos besoins en construction.
          Avec des décennies d'expérience, nous garantissons des matériaux de qualité livrés à temps.
        </p>
        <div className="mt-10">
          <Link
            to='/products'
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700"
          >
            Voir nos produits
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
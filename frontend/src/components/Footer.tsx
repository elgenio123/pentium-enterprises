
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">PentiumEnterprises</span>
            <p className="mt-4 text-gray-300">
              Votre partenaire de confiance en matériaux de construction. Produits de qualité, service fiable et pratiques durables.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Liens Rapides</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-300 hover:text-white">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-base text-gray-300 hover:text-white">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Légal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Conditions d'Utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-base text-center text-gray-400">
            © {new Date().getFullYear()} PentiumEnterprises. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Shield, Clock, Phone } from "lucide-react";

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

const AboutPreview = () => {
  return (
    <div className="py-24 bg-gray-50 sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Pourquoi Nous Choisir
          </h2>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
          Avec des décennies d'expérience et un engagement envers la qualité, nous sommes votre
          partenaire de confiance en matériaux de construction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;

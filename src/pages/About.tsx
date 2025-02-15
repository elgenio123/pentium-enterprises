
import { Shield, Users, Leaf, Award } from 'lucide-react';

const stats = [
  { label: "Années d'expérience", value: '25+' },
  { label: 'Projets réalisés', value: '1000+' },
  { label: 'Clients satisfaits', value: '500+' },
  { label: 'Employés', value: '100+' },
];

const values = [
  {
    icon: Shield,
    title: 'Qualité',
    description: 'Nous maintenons les normes les plus élevées dans tous nos produits et services.',
  },
  {
    icon: Users,
    title: 'Service Client',
    description: 'Notre équipe est dévouée à fournir un service client exceptionnel.',
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Nous nous engageons à des pratiques d\'extraction responsables et durables.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Notre engagement envers l\'excellence nous distingue dans l\'industrie.',
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-16">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?auto=format&fit=crop&q=80"
            alt="Carrière"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            À Propos de Nous
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
            Depuis plus de 25 ans, nous sommes leaders dans l'industrie des matériaux de construction,
            fournissant des produits de qualité supérieure et un service exceptionnel.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-amber-600">{stat.value}</div>
                <div className="mt-2 text-lg font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos Valeurs
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Les principes qui guident notre travail quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center">
                  <value.icon className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24 bg-gray-50 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Notre Histoire
              </h2>
              <p className="mt-6 text-lg text-gray-500">
                Fondée en 1998, notre entreprise a commencé comme une petite carrière locale.
                Au fil des années, nous avons grandi pour devenir l'un des principaux fournisseurs
                de matériaux de construction de la région, tout en maintenant notre engagement
                envers la qualité et le service client.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Aujourd'hui, nous sommes fiers de servir des centaines de clients et de participer
                à la construction de l'avenir de notre région.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                alt="Histoire de l'entreprise"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
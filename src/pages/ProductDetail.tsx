import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const products = {
  "gravier-de-construction": {
    name: "Gravier de Construction",
    description:
      "Gravier de haute qualité parfait pour les projets de construction",
    specifications: "Taille: 20-40mm, Densité: 1600kg/m³",
    applications: "Fondations, Drainage, Aménagement paysager",
    images:[
      "https://media.istockphoto.com/id/1077978676/photo/excavator-moving-sand-in-a-gravel-pit.jpg?s=1024x1024&w=is&k=20&c=DjQ5VWpa0VPUmpy6I3adHv6IbQjhvepVDP-pforzboU=",
      "https://www.decobistro.com/wp-content/uploads/2022/02/69723-951-gravier.jpg",
      "https://img.freepik.com/photos-premium/contexte-industriel-tas-gravier-extraction-gravier-construction-routes-tas-gravier-chantier_331695-2027.jpg?w=740",
      "https://img.freepik.com/photos-premium/tas-gravats-chantier-construction-pierres-grises_585982-293.jpg?w=740",
    ],
     
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Excellente résistance à la compression",
          "Forme angulaire pour une meilleure stabilité",
          "Conforme aux normes de construction",
          "Granulométrie contrôlée",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Fondations de bâtiments",
          "Travaux de drainage",
          "Aménagements paysagers",
          "Préparation de béton",
        ],
      },
    ],
  },
  "pierre-de-construction": {
    name: "Pierre de Construction",
    description:
      "Pierre robuste idéale pour la maçonnerie et la construction de murs",
    specifications: "Taille variable (selon bloc), Densité: 1800kg/m³",
    applications: "Murs porteurs, Murets, Revêtement extérieur",
    images:[
      "https://media.istockphoto.com/id/165866996/photo/bricky.jpg?s=1024x1024&w=is&k=20&c=nPats58sSMhvWS1Er7Q2PG9wo5tvwFSejx_g0SfZyFg=",
      "https://img.freepik.com/photos-gratuite/photo-du-motif-texture-pierre_58702-12309.jpg?t=st=1739865602~exp=1739869202~hmac=e30c322d3121be35c75fa7a1f75578a73d971e80842e68a9b2773449d2368567&w=740",
      "https://img.freepik.com/photos-premium/blocs-beton_42483-235.jpg?w=740",
      "https://img.freepik.com/photos-premium/production-artisanale-mini-usine-sechage-briques-argile-brute_128384-748.jpg?w=740",
    ],
      
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Grande résistance à la compression",
          "Excellente durabilité dans le temps",
          "Faible taux d’absorption d’eau",
          "Aspect esthétique pour la finition",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Construction de murs porteurs",
          "Parements extérieurs et intérieurs",
          "Aménagement de jardins et de bordures",
          "Création de murets décoratifs",
        ],
      },
    ],
  },

  "sable-fin": {
    name: "Sable Fin",
    description:
      "Sable tamisé de haute pureté, idéal pour la préparation de mortier et d’enduits",
    specifications: "Granulométrie: 0-2mm, Densité: 1500kg/m³",
    applications: "Mortiers, Enduits, Béton fin, Finitions",
    images:[
      "https://images.unsplash.com/photo-1618632806137-b8446c70fd9e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://img.freepik.com/photos-gratuite/texture-sable_72229-1403.jpg?t=st=1739865746~exp=1739869346~hmac=ec82f730af42430fbcbf4b9bcf949b48c86c53419c4d4253925585509b40b9a4&w=740",
      "https://img.freepik.com/psd-gratuit/sables-dores-paysage-plage-texture_191095-83428.jpg?t=st=1739865774~exp=1739869374~hmac=aad14a2bdf717e3db15991e110337ae743c5429d8370d691bb0e05a3c4771567&w=740",
      "https://img.freepik.com/photos-gratuite/texture-sableuse-plage-cote-mer-noire-vue-dessus-dunes-sable-plage-abstraites-pour-fond-banniere-ete_166373-1746.jpg?t=st=1739865801~exp=1739869401~hmac=50656645a8928d86646c8197e49afc534731572c6e5f4d963c66af96ebbd8979&w=740",
    ],
      
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Granulométrie uniforme",
          "Faible teneur en impuretés",
          "Bonne répartition pour les mélanges",
          "Couleur claire adaptée aux finitions",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Préparation de mortiers et d’enduits",
          "Confection de béton fin",
          "Joints de pavage",
          "Travaux de finition et de décoration",
        ],
      },
    ],
  },
  "granulats-concasses": {
    name: "Granulats Concassés",
    description:
      "Granulats de roche concassée, idéaux pour les travaux de construction et de voirie",
    specifications: "Taille: 5-20mm, Densité: 1700kg/m³",
    applications: "Béton, Routes, Fondations, Drainage",
    images:[
      "https://plus.unsplash.com/premium_photo-1675543163354-e4dc1f541330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://img.freepik.com/photos-gratuite/epice-arachides_1368-5482.jpg?t=st=1739865994~exp=1739869594~hmac=d8ecc6ab9df7036db72221e35261597b3a0613dd42c2112cd434692eadb9cc0c&w=740",
      "https://img.freepik.com/photos-gratuite/sol-recouvert-petites-pierres-sous-lumiere-du-soleil-arriere-plan-flou_181624-10140.jpg?t=st=1739866039~exp=1739869639~hmac=1f3e4db26d0e7e1ae0e3a760a230e40e5e0faa660e0e531585fe7506010a7607&w=740",
      "https://img.freepik.com/photos-premium/nouvelle-texture-arriere-plan-route-asphaltee_4043-637.jpg?w=740",
    ],
      
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Haute résistance mécanique",
          "Bonne adhérence avec le liant",
          "Excellente durabilité",
          "Granulométrie homogène",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Fabrication de béton",
          "Construction de routes",
          "Travaux de drainage",
          "Sous-couche pour pavés et dallages",
        ],
      },
    ],
  },
  "terre": {
    name: "Terre Végétale",
    description:
      "Terre de qualité supérieure pour l’aménagement paysager et l’agriculture",
    specifications: "Composition: Terre naturelle enrichie, Densité: 1200kg/m³",
    applications: "Jardinage, Pelouses, Cultures, Remblayage",
    images:[
      "https://compost-ain.fr/wp-content/uploads/2023/07/terreau-vrac-800x600.jpg",
      "https://img.freepik.com/photos-gratuite/vue-dessus-du-lit-germination-sol_23-2148175887.jpg?t=st=1739866178~exp=1739869778~hmac=0f7b307ccb1ecc8dc1db884d3e694a14e86d0aa01ae393ffb338bc5e3b303e73&w=740",
      "https://img.freepik.com/photos-gratuite/lay-plat-plante-verte_23-2148198689.jpg?t=st=1739866216~exp=1739869816~hmac=19c8205c9c4ef421dd09f92b117da3519f7caaf180f31b869ba3f71f371f2425&w=740",
      "https://img.freepik.com/photos-gratuite/pose-plate-plantes-outils-jardinage-fond_23-2148198747.jpg?t=st=1739866259~exp=1739869859~hmac=e681606ba53f7ff7f2067d3e50f8fa17da472fffc588e2612e46ad1fa348d685&w=740",
    ],
     
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Riche en nutriments",
          "Bonne rétention d’eau",
          "Facile à travailler",
          "Idéale pour plantations et gazons",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Aménagement paysager",
          "Création de pelouses",
          "Culture de plantes et légumes",
          "Remblayage écologique",
        ],
      },
    ],
  },

  "pozzoulane": {
    name: "Pozzoulane",
    description:
      "Matériau volcanique naturel utilisé pour le drainage et la filtration",
    specifications: "Taille: 2-10mm, Densité: 900kg/m³",
    applications: "Filtration, Aménagement paysager, Béton allégé",
    images:[
      "https://agrivalor.eu/wp-content/uploads/2018/02/produit-pouzzolane-7-15-1-600x450.jpg",
      "https://www.potagercolbert.com/wp-content/uploads/2024/08/pouzzolane-avantages-et-inconvenients-pour-votre-jardin.jpg",
      "https://terrevegetale13.fr/wp-content/uploads/2019/05/pouzzolane1x1.jpg",
      "https://cdn.futura-sciences.com/cdn-cgi/image/width=1520,quality=50,format=auto/sources/images/glossaire/Celine/Pouzzolane.jpg",
    ],
      
    details: [
      {
        title: "Caractéristiques",
        items: [
          "Excellente capacité de drainage",
          "Matériau léger et poreux",
          "Résistant aux intempéries",
          "100% naturel et écologique",
        ],
      },
      {
        title: "Utilisations",
        items: [
          "Filtration de l’eau",
          "Drainage des sols",
          "Construction de béton allégé",
          "Paillage et décoration de jardin",
        ],
      },
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Produit non trouvé</h2>
          <p className="mt-2 text-gray-600">Le produit que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            {/* Main Image with Navigation */}
            <div className="relative">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - Vue ${currentImageIndex + 1}`}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    currentImageIndex === index 
                      ? 'ring-2 ring-amber-600' 
                      : 'hover:opacity-75'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Miniature ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-amber-600 bg-opacity-20" />
                  )}
                </button>
              ))}
            </div>
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
                      <span className="flex-shrink-0 h-6 w-6 text-amber-600">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

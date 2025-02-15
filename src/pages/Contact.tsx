import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoogleMapComponent from "../components/GoogleMap";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+237 6 99 12 73 56", "+237 6 76 33 63 73"],
    description: "Du lundi au vendredi, 8h-18h",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["billytegetsop@gmail.com", "geniekamaha@gmail.com"],
    description: "Nous répondons sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    details: ["237 Ndokoti", "Douala, Cameroun"],
    description: "Venez nous rencontrer",
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun-Ven: 8h-18h", "Sam: 9h-12h"],
    description: "Fermé le dimanche",
  },
];

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-16">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80"
            alt="Contact"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contactez-Nous
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions
          </p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="py-16 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center">
                  <item.icon className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                {item.details.map((detail, index) => (
                  <p key={index} className="mt-2 text-gray-600">
                    {detail}
                  </p>
                ))}
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50 sm:py-16 ">
        <div className="max-w-4xl mx-auto bg-gray-300 border-2 rounded-md shadow-md px-7 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto ">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Envoyez-nous un Message
            </h2>
            <div className="mt-12">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom Complet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Téléphone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sujet
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="relative py-16">
        <iframe
          title="Google Maps"
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.579917460166!2d9.70802431476368!3d4.014119697009255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061a4b4f9b4f9a7%3A0x2a3b7c5b1b1b4e7e!2sNdokoti%2C%20Douala!5e0!3m2!1sen!2scm!4v1626414447835!5m2!1sen!2scm"
          allowFullScreen
          loading="lazy"
        ></iframe>
    </div> */}
      <GoogleMapComponent />
    </div>
  );
};

export default Contact;

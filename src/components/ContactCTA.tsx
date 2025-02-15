
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactCTA = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-lg shadow-xl">
          <h2 className="sr-only">Contactez-nous</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative px-6 py-10 overflow-hidden rounded-t-lg bg-amber-700 sm:px-10 xl:p-12 lg:rounded-l-lg lg:rounded-tr-none">
              <div className="relative">
                <h3 className="text-lg font-medium text-white">Informations de contact</h3>
                <p className="max-w-3xl mt-6 text-base text-amber-50">
                  Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour des matériaux de qualité et un service exceptionnel.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt><span className="sr-only">Téléphone</span></dt>
                  <dd className="flex text-base text-amber-50">
                    <Phone className="flex-shrink-0 w-6 h-6 text-amber-200" aria-hidden="true" />
                    <span className="ml-3">+237 6 99 12 73 56</span>
                  </dd>
                  <dt><span className="sr-only">Email</span></dt>
                  <dd className="flex text-base text-amber-50">
                    <Mail className="flex-shrink-0 w-6 h-6 text-amber-200" aria-hidden="true" />
                    <span className="ml-3">billytegetsop@gmail.com</span>
                  </dd>
                  <dt><span className="sr-only">Adresse</span></dt>
                  <dd className="flex text-base text-amber-50">
                    <MapPin className="flex-shrink-0 w-6 h-6 text-amber-200" aria-hidden="true" />
                    <span className="ml-3">237 Ndokoti<br />Douala, Cameroun</span>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 mt-6 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Nom complet
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("name", { 
                        required: "Le nom est requis",
                        minLength: { value: 2, message: "Le nom doit contenir au moins 2 caractères" }
                      })}
                      type="text"
                      id="name"
                      className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                        errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("email", {
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Adresse email invalide"
                        }
                      })}
                      type="email"
                      id="email"
                      className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                        errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("message", {
                        required: "Le message est requis",
                        minLength: { value: 10, message: "Le message doit contenir au moins 10 caractères" }
                      })}
                      id="message"
                      rows={4}
                      className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                        errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
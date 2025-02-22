
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <Services />
      <ContactCTA />
    </>
  );
};

export default Home;
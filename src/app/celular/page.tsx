import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero isMobile={true} />
      <FeaturedProducts isMobile={true} />
      <AboutUs isMobile={true} />
      <Testimonials isMobile={true} />
      <ContactCTA isMobile={true} />
    </>
  );
}

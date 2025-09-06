import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero isMobile={true} />
        <FeaturedProducts isMobile={true} />
        <AboutUs isMobile={true} />
        <Testimonials isMobile={true} />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-20">
        <Hero isMobile={true} />
        <FeaturedProducts isMobile={true} />
        <AboutUs isMobile={true} />
        <Testimonials isMobile={true} />
        <ContactCTA isMobile={true} />
      </main>
      <Footer isMobile={true} />
      <BottomNavigation />
    </div>
  );
}

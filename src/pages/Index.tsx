import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import SpiceGallery from '@/components/SpiceGallery';
import AboutUs from '@/components/AboutUs';
import MeetFounder from '@/components/MeetFounder';
import Recipes from '@/components/Recipes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <SpiceGallery />
      <AboutUs />
      <MeetFounder />
      <Recipes />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;

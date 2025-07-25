import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import AboutUs from '@/components/AboutUs';
import Recipes from '@/components/Recipes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <AboutUs />
      <Recipes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

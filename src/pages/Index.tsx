import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VitrineSection from '@/components/VitrineSection';
import Products from '@/components/Products';
import InstagramSection from '@/components/InstagramSection';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VitrineSection />
        <Products />
        <InstagramSection />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

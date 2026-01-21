import { Droplets, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPoolImage from '@/assets/hero-pool.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPoolImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Decorative waves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto animate-wave"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(193, 100%, 90%)"
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-auto animate-wave-slow"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(193, 100%, 43%)"
            fillOpacity="0.3"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating water drops decoration - hidden on mobile */}
      <div className="hidden sm:block absolute top-32 left-10 animate-float opacity-30">
        <Droplets className="w-16 md:w-20 h-16 md:h-20 text-secondary" />
      </div>
      <div className="hidden sm:block absolute top-48 right-10 md:right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Droplets className="w-12 md:w-16 h-12 md:h-16 text-primary" />
      </div>
      <div className="hidden md:block absolute bottom-48 left-1/4 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <Droplets className="w-12 h-12 text-secondary" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo badge */}
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 shadow-water animate-fade-in">
            <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              Tudo para piscinas!
            </span>
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">PH & Pronto</span>
          </h1>

          {/* H2 - Descrição */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sua parceira em soluções ágeis para tratamento de águas e piscinas. Produtos de alta performance para uma piscina cristalina sem esforço.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/5585994319021"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent/90 hover:scale-105 shadow-water flex items-center justify-center gap-2"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/vitrine"
              className="group w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-water flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver vitrine
            </Link>
            <a
              href="#produtos"
              className="w-full sm:w-auto bg-card/90 backdrop-blur-sm text-primary border-2 border-primary/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary text-center"
            >
              Saiba mais
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Produtos</div>
            </div>
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">🚚</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Fortaleza e Região</div>
            </div>
            <div className="text-center bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">5★</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

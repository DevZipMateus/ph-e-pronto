import { ShoppingBag, ArrowRight, Package, Truck, CreditCard, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import poolProductsImage from '@/assets/pool-products.jpg';

const VitrineSection = () => {
  const benefits = [
    {
      icon: Package,
      title: 'Catálogo completo',
      description: 'Veja todos os nossos produtos disponíveis',
    },
    {
      icon: CreditCard,
      title: 'Preços atualizados',
      description: 'Consulte valores em tempo real',
    },
    {
      icon: Truck,
      title: 'Entrega rápida',
      description: 'Receba em Fortaleza e Região Metropolitana',
    },
    {
      icon: Star,
      title: 'Qualidade garantida',
      description: 'Produtos de alta performance',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <ShoppingBag className="w-4 h-4" />
              Vitrine online
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Confira nossa <span className="text-gradient">vitrine de produtos</span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Explore nosso catálogo completo de produtos para piscinas. De cloro e algicidas a 
              equipamentos de limpeza, temos tudo o que você precisa para manter sua piscina cristalina.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/vitrine"
              className="group inline-flex items-center gap-3 bg-wave-gradient text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-water"
            >
              <ShoppingBag className="w-5 h-5" />
              Acessar vitrine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image and decorative elements */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-wave-gradient rounded-3xl rotate-2 opacity-10"></div>
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl -rotate-2"></div>
            
            {/* Main image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-water-hover">
              <img
                src={poolProductsImage}
                alt="Produtos para piscina disponíveis na vitrine"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                      ✓
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                      ✓
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      ✓
                    </div>
                  </div>
                  <span className="text-primary-foreground text-sm sm:text-base font-medium">
                    +100 produtos disponíveis
                  </span>
                </div>
                <p className="text-primary-foreground/90 text-sm sm:text-base">
                  Cloro, algicidas, equipamentos e muito mais
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg animate-float">
              Novidades!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;

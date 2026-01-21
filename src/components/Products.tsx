import { Package, Droplet, Brush, Beaker } from 'lucide-react';
import poolProductsImage from '@/assets/pool-products.jpg';
import poolCleaningImage from '@/assets/pool-cleaning.jpg';
const Products = () => {
  const products = [{
    icon: Beaker,
    title: 'Produtos químicos',
    description: 'Cloro, algicidas, reguladores de pH e outros produtos essenciais para o tratamento da água.',
    items: ['Cloro granulado', 'Algicida', 'Regulador de pH', 'Clarificante']
  }, {
    icon: Package,
    title: 'Embalagens econômicas',
    description: 'Sacos de 25kg e baldes de 10kg para maior economia e rendimento.',
    items: ['Sacos 25kg', 'Baldes 10kg', 'Kits completos', 'Refis']
  }, {
    icon: Brush,
    title: 'Acessórios de limpeza',
    description: 'Rodos, escovas e aspiradores para manter sua piscina sempre limpa.',
    items: ['Rodos para piscina', 'Escovas', 'Aspiradores', 'Peneiras']
  }, {
    icon: Droplet,
    title: 'Tratamento especial',
    description: 'Produtos para recuperação e equilíbrio químico de piscinas problemáticas.',
    items: ['Decantador', 'Floculante', 'Oxidante', 'Sulfato de alumínio']
  }];
  return <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <div>
            <span className="inline-block bg-accent/10 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Nossos produtos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Tudo para sua piscina
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Oferecemos uma linha completa de produtos químicos e acessórios para manutenção de piscinas, 
              sempre priorizando alta performance e facilidade de aplicação.
            </p>
          </div>
          
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => <div key={index} className="group bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-wave-gradient rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{product.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{product.description}</p>
              <ul className="space-y-1.5 sm:space-y-2">
                {product.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                    {item}
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* CTA with image */}
        <div className="mt-10 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden">
          <img src={poolCleaningImage} alt="Limpeza de piscina" className="w-full h-72 sm:h-80 lg:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
                Precisa de um produto específico?
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/90 mb-6 sm:mb-8 max-w-xl mx-auto">
                Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.
              </p>
              <a href="https://wa.me/5585994319021" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent/90 hover:scale-105">
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Products;
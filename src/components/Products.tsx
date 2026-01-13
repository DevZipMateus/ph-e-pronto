import { Package, Droplet, Filter, Brush, Beaker, ShieldCheck } from 'lucide-react';
import poolProductsImage from '@/assets/pool-products.jpg';
import poolCleaningImage from '@/assets/pool-cleaning.jpg';

const Products = () => {
  const products = [
    {
      icon: Beaker,
      title: 'Produtos químicos',
      description: 'Cloro, algicidas, reguladores de pH e outros produtos essenciais para o tratamento da água.',
      items: ['Cloro granulado', 'Algicida', 'Regulador de pH', 'Clarificante'],
    },
    {
      icon: Package,
      title: 'Embalagens econômicas',
      description: 'Sacos de 25kg e baldes de 10kg para maior economia e rendimento.',
      items: ['Sacos 25kg', 'Baldes 10kg', 'Kits completos', 'Refis'],
    },
    {
      icon: Brush,
      title: 'Acessórios de limpeza',
      description: 'Rodos, escovas e aspiradores para manter sua piscina sempre limpa.',
      items: ['Rodos para piscina', 'Escovas', 'Aspiradores', 'Peneiras'],
    },
    {
      icon: Filter,
      title: 'Filtros e bombas',
      description: 'Equipamentos para filtragem e circulação da água.',
      items: ['Filtros de areia', 'Bombas', 'Motores', 'Peças de reposição'],
    },
    {
      icon: Droplet,
      title: 'Tratamento especial',
      description: 'Produtos para recuperação e equilíbrio químico de piscinas problemáticas.',
      items: ['Decantador', 'Floculante', 'Oxidante', 'Sulfato de alumínio'],
    },
    {
      icon: ShieldCheck,
      title: 'Estrutura e segurança',
      description: 'Degraus, escadas e itens estruturais para sua piscina.',
      items: ['Degraus', 'Escadas', 'Corrimãos', 'Ralos'],
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nossos produtos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo para sua piscina
            </h2>
            <p className="text-muted-foreground">
              Oferecemos uma linha completa de produtos químicos e acessórios para manutenção de piscinas, 
              sempre priorizando alta performance e facilidade de aplicação.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-water">
            <img
              src={poolProductsImage}
              alt="Produtos para tratamento de piscina"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-wave-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA with image */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src={poolCleaningImage}
            alt="Limpeza de piscina"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Precisa de um produto específico?
              </h3>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Entre em contato conosco e solicite um orçamento personalizado para suas necessidades.
              </p>
              <a
                href="https://wa.me/5585994319021"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-accent/90 hover:scale-105"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

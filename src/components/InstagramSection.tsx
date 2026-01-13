import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/phepronto/";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-water-light/30 via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            <span>@phepronto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Acompanhe dicas de manutenção, novidades em produtos e muito mais! 
            Fique por dentro de tudo sobre o mundo das piscinas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
          {/* Instagram-style preview cards */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-gradient-to-br from-primary to-water rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-white">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">💧</span>
              <span className="text-xs sm:text-sm font-medium text-center">Dicas de Tratamento</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>

          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-gradient-to-br from-water to-water-dark rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-white">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">🧪</span>
              <span className="text-xs sm:text-sm font-medium text-center">Produtos em Destaque</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>

          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-gradient-to-br from-secondary to-secondary/70 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-secondary-foreground">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">✨</span>
              <span className="text-xs sm:text-sm font-medium text-center">Novidades</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>

          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-white">
              <Instagram className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-medium text-center">Ver Mais</span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6B2F94] hover:via-[#D91818] hover:to-[#D4652F] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base px-6 sm:px-8"
          >
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              Seguir @phepronto
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </Button>
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4">
            Junte-se à nossa comunidade de amantes de piscinas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

import { Instagram, Mail, MapPin } from 'lucide-react';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Fale conosco
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Estamos prontos para atender você. Entre em contato pelos nossos canais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5585994319021"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">WhatsApp</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">(85) 99431-9021</p>
              <span className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-[#25D366]">
                Conversar →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:adm@phpronto.com.br"
              className="group bg-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">E-mail</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block break-all">adm@phpronto.com.br</p>
              <span className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-primary">
                Enviar →
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/phepronto/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-[#E4405F]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-[#E4405F]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">Instagram</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">@phepronto</p>
              <span className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-[#E4405F]">
                Seguir →
              </span>
            </a>

            {/* Endereço */}
            <a
              href="https://www.google.com/maps/place/Av.+Dr.+Mendel+Steinbruch,+15047+-+Jardim+Bandeirantes,+Maracana%C3%BA+-+CE,+61939-000"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-secondary" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">Endereço</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Maracanaú - CE
              </p>
              <span className="inline-block mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-secondary">
                Ver mapa →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

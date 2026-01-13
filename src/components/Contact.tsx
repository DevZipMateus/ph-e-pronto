import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato pelos nossos canais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5585994319021"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">(85) 99431-9021</p>
              <span className="inline-block mt-4 text-sm font-medium text-[#25D366]">
                Clique para conversar →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:adm@phpronto.com.br"
              className="group bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground">adm@phpronto.com.br</p>
              <span className="inline-block mt-4 text-sm font-medium text-primary">
                Clique para enviar →
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/phepronto/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-[#E4405F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-[#E4405F]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground">@phepronto</p>
              <span className="inline-block mt-4 text-sm font-medium text-[#E4405F]">
                Clique para seguir →
              </span>
            </a>

            {/* Endereço */}
            <a
              href="https://www.google.com/maps/place/Av.+Dr.+Mendel+Steinbruch,+15047+-+Jardim+Bandeirantes,+Maracana%C3%BA+-+CE,+61939-000"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Endereço</h3>
              <p className="text-muted-foreground text-sm">
                Av. Dr. Mendel Steinbruch, 15047<br />
                Maracanaú - CE
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-secondary">
                Clique para ver no mapa →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

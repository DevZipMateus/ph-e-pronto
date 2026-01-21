import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Localização
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Onde estamos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Visite nossa loja em Maracanaú e confira nossos produtos pessoalmente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
            <div className="bg-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-water flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Endereço</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Av. Dr. Mendel Steinbruch, 15047<br />
                  Jardim Bandeirantes, Maracanaú - CE<br />
                  CEP: 61934-000
                </p>
              </div>
            </div>

            <div className="bg-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-water flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Horário de funcionamento</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Segunda a sexta: 08h às 17h<br />
                  Sábados: 08h às 12h
                </p>
              </div>
            </div>

            <div className="bg-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-water flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Telefone</h3>
                <a 
                  href="https://wa.me/5585994319021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (85) 99431-9021
                </a>
              </div>
            </div>

            <div className="bg-card p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-water flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">E-mail</h3>
                <a 
                  href="mailto:adm@phpronto.com.br" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  adm@phpronto.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl sm:rounded-2xl shadow-water overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.824898831547!2d-38.595679824987256!3d-3.8711760416736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753b90835a6e9%3A0x519be700e3102b17!2sAv.%20Dr.%20Mendel%20Steinbruch%2C%2015047%20-%20Jardim%20Bandeirantes%2C%20Maracana%C3%BA%20-%20CE%2C%2061939-000!5e0!3m2!1spt-BR!2sbr!4v1705000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PH & Pronto"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

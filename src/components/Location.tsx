import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onde estamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visite nossa loja em Maracanaú e confira nossos produtos pessoalmente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl shadow-water flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Av. Dr. Mendel Steinbruch, 15047<br />
                  Jardim Bandeirantes, Maracanaú - CE<br />
                  CEP: 61934-000
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-water flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário de funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a sexta: 7h às 17h
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-water flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <a 
                  href="https://wa.me/5585994319021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (85) 99431-9021
                </a>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-water flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a 
                  href="mailto:adm@phpronto.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  adm@phpronto.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl shadow-water overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.824898831547!2d-38.595679824987256!3d-3.8711760416736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753b90835a6e9%3A0x519be700e3102b17!2sAv.%20Dr.%20Mendel%20Steinbruch%2C%2015047%20-%20Jardim%20Bandeirantes%2C%20Maracana%C3%BA%20-%20CE%2C%2061939-000!5e0!3m2!1spt-BR!2sbr!4v1705000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PH e Pronto"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

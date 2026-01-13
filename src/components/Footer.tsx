import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="PH e Pronto"
              className="h-16 w-auto mb-4"
            />
            <p className="text-background/70 max-w-md mb-6">
              Sua parceira em soluções ágeis para tratamento de águas e piscinas. 
              Produtos de alta performance para uma piscina cristalina sem esforço.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/phepronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5585994319021"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:adm@phpronto.com.br"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-background/70 hover:text-background transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-background/70 hover:text-background transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Av. Dr. Mendel Steinbruch, 15047<br />
                  Maracanaú - CE
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/5585994319021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (85) 99431-9021
                </a>
              </li>
              <li>
                <a 
                  href="mailto:adm@phpronto.com.br"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  adm@phpronto.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} PH e Pronto. Todos os direitos reservados.
            </p>
            <p className="text-background/50 text-sm">
              CNPJ: 37.102.427/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

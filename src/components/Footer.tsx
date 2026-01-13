import { Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import whatsappIcon from '@/assets/whatsapp-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo e descrição */}
          <div className="col-span-2 lg:col-span-2">
            <div className="bg-white rounded-xl p-3 sm:p-4 inline-block mb-4">
              <img
                src="/logo.png"
                alt="PH e Pronto"
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-background/70 max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              Sua parceira em soluções ágeis para tratamento de águas e piscinas. 
              Produtos de alta performance para uma piscina cristalina sem esforço.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/phepronto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5585994319021"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center overflow-hidden"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain" />
              </a>
              <a
                href="mailto:adm@phpronto.com.br"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <Link to="/vitrine" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Vitrine
                </Link>
              </li>
              <li>
                <a href="#localizacao" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm sm:text-base text-background/70 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-sm sm:text-base text-background/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
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
                  className="flex items-center gap-2 text-sm sm:text-base text-background/70 hover:text-background transition-colors"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5" />
                  (85) 99431-9021
                </a>
              </li>
              <li>
                <a 
                  href="mailto:adm@phpronto.com.br"
                  className="flex items-center gap-2 text-sm sm:text-base text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">adm@phpronto.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-background/50 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} PH e Pronto. Todos os direitos reservados.
            </p>
            <p className="text-background/50 text-xs sm:text-sm">
              CNPJ: 37.102.427/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

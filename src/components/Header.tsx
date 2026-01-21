import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início', isRoute: false },
    { href: '#sobre', label: 'Sobre', isRoute: false },
    { href: '#produtos', label: 'Produtos', isRoute: false },
    { href: '/vitrine', label: 'Vitrine', isRoute: true },
    { href: '#localizacao', label: 'Localização', isRoute: false },
    { href: '#contato', label: 'Contato', isRoute: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-water'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="PH & Pronto - Tudo para Piscinas"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="https://wa.me/5585994319021"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-accent/90 hover:scale-105"
            >
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-card/95 backdrop-blur-md rounded-lg mt-2 shadow-water absolute left-4 right-4 sm:left-6 sm:right-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href="https://wa.me/5585994319021"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-center transition-all duration-200 hover:bg-accent/90 text-sm sm:text-base"
              >
                Fale conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

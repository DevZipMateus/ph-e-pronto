import { History, Target, Eye, Heart, Zap, CheckCircle, Sparkles } from 'lucide-react';
import poolTestingImage from '@/assets/pool-testing.jpg';
import crystalWaterImage from '@/assets/crystal-water.jpg';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Praticidade',
      description: 'Facilitamos a vida do cliente',
    },
    {
      icon: CheckCircle,
      title: 'Agilidade',
      description: 'Atendimento "Pronto" e entrega eficiente',
    },
    {
      icon: Target,
      title: 'Eficácia',
      description: 'Produtos que resolvem o problema de primeira',
    },
    {
      icon: Sparkles,
      title: 'Clareza',
      description: 'Transparência no atendimento e na água',
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Sobre nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Conheça a PH & Pronto
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Desde 2025, transformando a manutenção de piscinas em uma tarefa simples e prazerosa.
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <History className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Nossa história</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Nossa história começou nos últimos meses de 2025, motivada pela vontade de entregar mais do que apenas produtos: queríamos entregar soluções.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              A PH & Pronto foi criada para ser a parceira ideal no tratamento de águas e piscinas, com o objetivo central de garantir qualidade máxima e segurança. Entendemos que piscina é sinônimo de alegria, por isso trabalhamos para facilitar o tratamento da água, oferecendo tudo o que é necessário para que você tenha uma piscina cristalina sem esforço.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-wave-gradient rounded-2xl sm:rounded-3xl rotate-3 opacity-20"></div>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-water">
                <img
                  src={poolTestingImage}
                  alt="Teste de pH da água da piscina"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          <div className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Descomplicar o tratamento de águas, oferecendo produtos de alta performance e orientação prática para que nossos clientes desfrutem de uma piscina cristalina sem perder tempo.
            </p>
          </div>

          <div className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-water hover:shadow-water-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ser a principal referência em soluções ágeis para piscinas, reconhecida por transformar a manutenção complexa em uma tarefa simples e rápida.
            </p>
          </div>
        </div>

        {/* Values with image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-water order-2 lg:order-1">
            <img
              src={crystalWaterImage}
              alt="Água cristalina de piscina"
              className="w-full h-56 sm:h-72 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <p className="text-primary-foreground text-base sm:text-lg font-semibold">
                Água cristalina é nosso compromisso
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Nossos valores</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wave-gradient rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça a PH e Pronto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde 2025, transformando a manutenção de piscinas em uma tarefa simples e prazerosa.
          </p>
        </div>

        {/* History */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <History className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nossa história</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nossa história começou nos últimos meses de 2025, motivada pela vontade de entregar mais do que apenas produtos: queríamos entregar soluções.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A PH e Pronto foi criada para ser a parceira ideal no tratamento de águas e piscinas, com o objetivo central de garantir qualidade máxima e segurança. Entendemos que piscina é sinônimo de alegria, por isso trabalhamos para facilitar o tratamento da água, oferecendo tudo o que é necessário para que você tenha uma piscina cristalina sem esforço.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-wave-gradient rounded-3xl rotate-3 opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-water">
                <img
                  src={poolTestingImage}
                  alt="Teste de pH da água da piscina"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Descomplicar o tratamento de águas, oferecendo produtos de alta performance e orientação prática para que nossos clientes desfrutem de uma piscina cristalina sem perder tempo.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-water hover:shadow-water-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser a principal referência em soluções ágeis para piscinas, reconhecida por transformar a manutenção complexa em uma tarefa simples e rápida.
            </p>
          </div>
        </div>

        {/* Values with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-water">
            <img
              src={crystalWaterImage}
              alt="Água cristalina de piscina"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground text-lg font-semibold">
                Água cristalina é nosso compromisso
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nossos valores</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-5 rounded-xl shadow-water hover:shadow-water-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-wave-gradient rounded-xl flex items-center justify-center mb-3">
                    <value.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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

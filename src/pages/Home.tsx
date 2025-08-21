import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Car, Wrench, ArrowRight, CheckCircle, Play } from 'lucide-react';

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-5xl md:text-7xl font-black text-brand-light uppercase tracking-tighter"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-4 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light">
      {/* Hero Section with Video Background - FINAL FIX */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src="https://irjakxmzcizkgwlpdkjq.supabase.co/storage/v1/object/sign/arquivos/videoplayback.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MTVlMmYxYi03NTcxLTQxYzQtODViMC0xZDkwMjhhM2IwN2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnF1aXZvcy92aWRlb3BsYXliYWNrLm1wNCIsImlhdCI6MTc1NTgwOTUwMCwiZXhwIjo0OTA5NDA5NTAwfQ.1r8u-T-N9lJqfYYNaEdjI4HVSCHYbDdeHFfWq_wfXkA"
            autoPlay
            loop
            muted
            playsInline
            key="working-cinematic-car-video"
          >
            Seu navegador não suporta o vídeo de fundo.
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.div
            className="inline-block p-3 bg-brand-dark/20 backdrop-blur-sm border border-brand-gold/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Play className="w-8 h-8 text-brand-gold" />
          </motion.div>

          <AnimatedText text="Inovação em Proteção Veicular" />
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-brand-light/90 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Combinamos tecnologia de ponta e design para criar a experiência de segurança definitiva.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link 
              to="/servicos"
              className="group inline-flex items-center justify-center bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-gold-light transition-all transform hover:scale-105 shadow-lg hover:shadow-brand-gold/20"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/veiculos"
              className="group inline-flex items-center justify-center border-2 border-brand-light/20 backdrop-blur-sm text-brand-light px-8 py-4 rounded-full font-bold hover:border-brand-gold hover:text-brand-gold transition-all transform hover:scale-105"
            >
              Ver Veículos
              <Car className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-brand-light/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand-gold">15+</p>
              <p className="text-brand-light/70 mt-1">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand-gold">1000+</p>
              <p className="text-brand-light/70 mt-1">Veículos Blindados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-brand-gold">100%</p>
              <p className="text-brand-light/70 mt-1">Satisfação do Cliente</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="w-6 h-10 border-2 border-brand-light/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-light">
              Soluções Completas
            </h2>
            <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
              Da blindagem certificada à manutenção especializada, cuidamos de cada detalhe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Shield size={32} />}
              title="Blindagem Nível III-A"
              description="Proteção balística certificada com os materiais mais leves e resistentes do mercado."
              delay={0}
            />
            <ServiceCard 
              icon={<Car size={32} />}
              title="Veículos Pronta-Entrega"
              description="Uma seleção exclusiva de veículos novos e seminovos já blindados, prontos para você."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Wrench size={32} />}
              title="Manutenção Premium"
              description="Serviços especializados para garantir a integridade e performance do seu blindado."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brand-light mb-6">
                A Arte da Segurança
              </h2>
              <p className="text-lg text-brand-gray mb-8">
                Na Nano Blindagens, não apenas protegemos, nós aprimoramos. Cada veículo é tratado como uma obra de arte, onde a segurança se funde perfeitamente com a estética e a performance original.
              </p>
              <div className="space-y-4">
                <FeatureItem text="Tecnologia de ponta em materiais balísticos" />
                <FeatureItem text="Engenharia que preserva a dirigibilidade" />
                <FeatureItem text="Acabamento impecável e imperceptível" />
                <FeatureItem text="Garantia de 5 anos e suporte 24/7" />
              </div>
              <Link 
                to="/sobre"
                className="group mt-10 inline-flex items-center text-brand-gold font-bold"
              >
                Conheça nossa história
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Veículo blindado"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/80 backdrop-blur-sm border border-brand-gold/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-brand-light mb-2">Blindagem Invisível</h4>
                <p className="text-brand-gray text-sm">
                  Tecnologia que protege sem comprometer o design original do seu veículo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    className="bg-brand-dark/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center transition-all duration-300 hover:border-brand-gold hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    <div className="inline-block text-brand-gold mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-brand-light mb-4">{title}</h3>
    <p className="text-brand-gray">{description}</p>
  </motion.div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
    <span className="text-brand-light">{text}</span>
  </div>
);

export default Home;

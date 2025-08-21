import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Car, Wrench, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailCard = ({ icon, title, description, features, delay }: { icon: React.ReactNode, title: string, description: string, features: string[], delay: number }) => (
  <motion.div
    className="bg-brand-dark border border-gray-800 rounded-lg p-8 flex flex-col transition-all duration-300 hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="text-brand-gold">{icon}</div>
      <h3 className="text-2xl font-bold text-brand-light">{title}</h3>
    </div>
    <p className="text-brand-gray mb-6 flex-grow">{description}</p>
    <div className="space-y-3 mb-6">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
          <span className="text-brand-light">{feature}</span>
        </div>
      ))}
    </div>
    <Link 
      to="/contato"
      className="group mt-auto inline-flex items-center text-brand-gold font-bold"
    >
      Solicitar Orçamento
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Blindagem Veicular",
      description: "Processo completo de blindagem com certificação NIJ, utilizando materiais de última geração para máxima proteção e mínima adição de peso.",
      features: ["Níveis IIIA, III, IV", "Vidros balísticos ultra-resistentes", "Manta de aramida leve", "Garantia de 5 anos"],
    },
    {
      icon: <Car size={32} />,
      title: "Venda de Blindados",
      description: "Amplo estoque de veículos novos e seminovos já blindados, inspecionados e prontos para entrega imediata.",
      features: ["Marcas premium", "Inspeção técnica rigorosa", "Documentação completa", "Test drive disponível"],
    },
    {
      icon: <Wrench size={32} />,
      title: "Manutenção Especializada",
      description: "Equipe técnica certificada para manutenção preventiva e corretiva, garantindo a integridade e performance do seu veículo.",
      features: ["Revisão de suspensão e freios", "Reparo de delaminação", "Troca de vidros", "Suporte 24/7"],
    },
    {
      icon: <FileCheck size={32} />,
      title: "Consultoria de Segurança",
      description: "Análise de risco e consultoria para desenvolver um projeto de segurança personalizado para suas necessidades.",
      features: ["Avaliação de risco", "Projetos customizados", "Indicação de nível de proteção", "Treinamento de uso"],
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark"></div>
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-light">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Soluções de ponta para garantir sua total segurança e tranquilidade.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceDetailCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

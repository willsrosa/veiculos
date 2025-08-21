import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, CheckCircle, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';

const StatCounter = ({ from, to, label }: { from: number, to: number, label: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(from);

  React.useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [inView, from, to]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold text-brand-gold">{displayValue}+</p>
      <p className="text-brand-gray mt-2">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
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
            Sobre Nós
          </h1>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Pioneiros em tecnologia de blindagem, dedicados a redefinir os padrões de segurança.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-light mb-6">Nossa Jornada</h2>
            <div className="space-y-4 text-brand-gray text-lg">
              <p>
                Desde 2008, a Nano Blindagens tem sido sinônimo de inovação. Nascemos da visão de que a segurança não precisa comprometer o design ou a performance.
              </p>
              <p>
                Fomos pioneiros no uso de materiais compósitos avançados, redefinindo o que é possível em proteção balística veicular e estabelecendo novos padrões de qualidade e leveza no setor.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Oficina Nano Blindagens"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            className="bg-brand-dark border border-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-brand-gold" />
              <h3 className="text-2xl font-bold text-brand-light">Missão</h3>
            </div>
            <p className="text-brand-gray">
              Oferecer a mais avançada tecnologia em proteção balística, garantindo a máxima segurança com discrição e preservando a originalidade de cada veículo.
            </p>
          </motion.div>
          <motion.div 
            className="bg-brand-dark border border-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-brand-gold" />
              <h3 className="text-2xl font-bold text-brand-light">Valores</h3>
            </div>
            <p className="text-brand-gray">
              Inovação contínua, excelência em engenharia, compromisso com a qualidade e total confidencialidade do cliente.
            </p>
          </motion.div>
        </div>

        <div className="bg-black/20 rounded-lg p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter from={0} to={15} label="Anos de Mercado" />
            <StatCounter from={0} to={1000} label="Veículos Entregues" />
            <StatCounter from={0} to={100} label="Clientes Satisfeitos %" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

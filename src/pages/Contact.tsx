import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Fale Conosco
          </h1>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Estamos prontos para transformar suas necessidades de segurança em realidade.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactInfo icon={<Phone />} title="Telefone" text="(11) 99999-9999" />
            <ContactInfo icon={<Mail />} title="Email" text="contato@nanoblindagens.com.br" />
            <ContactInfo icon={<MapPin />} title="Endereço" text="Av. Principal, 1234 - São Paulo, SP" />
          </motion.div>

          <motion.div 
            className="lg:col-span-2 bg-brand-dark border border-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-brand-light mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-6">
              <InputField id="name" name="name" label="Nome" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} />
              <InputField id="email" name="email" label="Email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="group w-full flex items-center justify-center bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-gold-light transition-colors transform hover:scale-105"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex items-start gap-4">
    <div className="text-brand-gold mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-brand-light">{title}</h3>
      <p className="text-brand-gray">{text}</p>
    </div>
  </div>
);

const InputField = ({ id, name, label, type, placeholder, value, onChange }: { id: string, name: string, label: string, type: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-brand-gray mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;

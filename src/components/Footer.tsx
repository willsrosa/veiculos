import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://nanoblindagens.com.br/wp-content/uploads/2025/02/Logo-_-Nano-23.png" 
              alt="Nano Blindagens" 
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-brand-gray text-sm max-w-xs">
              Inovação em proteção veicular. Transformando segurança em arte com tecnologia de ponta.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-brand-gray hover:text-brand-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-brand-gray hover:text-brand-gold transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-brand-gray hover:text-brand-gold transition-colors">Serviços</Link></li>
              <li><Link to="/veiculos" className="text-brand-gray hover:text-brand-gold transition-colors">Veículos</Link></li>
              <li><Link to="/contato" className="text-brand-gray hover:text-brand-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-brand-gray text-sm">
            © 2025 Nano Blindagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

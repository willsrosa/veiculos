import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Veículos', path: '/veiculos' },
    { name: 'Contato', path: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-brand-dark border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://nanoblindagens.com.br/wp-content/uploads/2025/02/Logo-_-Nano-23.png" 
              alt="Nano Blindagens" 
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative font-medium transition-colors text-brand-light hover:text-brand-gold ${
                  isActive(link.path) ? 'text-brand-gold' : ''
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              to="/contato"
              className="hidden lg:block bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-brand-gold-light transition-colors transform hover:scale-105"
            >
              ORÇAMENTO
            </Link>
            
            <button
              className="lg:hidden p-2 text-brand-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-brand-dark/95 backdrop-blur-lg absolute top-full left-0 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`font-medium text-lg text-center py-2 rounded-md transition-colors ${
                    isActive(link.path) ? 'text-brand-gold bg-gray-800' : 'text-brand-light hover:text-brand-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contato"
                className="mt-4 bg-brand-gold text-brand-dark text-center px-6 py-3 rounded-full font-bold hover:bg-brand-gold-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ORÇAMENTO
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Vehicle } from '../types/Vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, index }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative group bg-brand-dark border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.model}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-light mb-1 group-hover:text-brand-gold transition-colors">
          {vehicle.model}
        </h3>
        <p className="text-brand-gray text-sm">{vehicle.year} • Nível {vehicle.armorLevel}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-brand-gold">{formatPrice(vehicle.price)}</span>
        </div>
      </div>

      <motion.div 
        className="absolute top-4 right-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
      >
        <button className="bg-brand-dark/50 backdrop-blur-sm p-3 rounded-full text-brand-light hover:bg-brand-gold hover:text-brand-dark transition-colors">
          <Eye className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default VehicleCard;

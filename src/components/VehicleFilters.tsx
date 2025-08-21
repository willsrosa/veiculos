import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { VehicleFilters as FilterType } from '../types/Vehicle';
import { getBrands, getYearRange, getPriceRange } from '../data/vehicles';

interface VehicleFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
  isOpen: boolean;
  onToggle: () => void;
  resultCount: number;
}

const VehicleFilters: React.FC<VehicleFiltersProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
  resultCount
}) => {
  const brands = getBrands();
  const yearRange = getYearRange();
  const priceRange = getPriceRange();

  const handleFilterChange = (key: keyof FilterType, value: string | number) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      brand: '',
      minYear: yearRange.min,
      maxYear: yearRange.max,
      minPrice: priceRange.min,
      maxPrice: priceRange.max
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const sidebarContent = (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-brand-light flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtros
        </h3>
        <span className="text-sm text-brand-gray">
          {resultCount} resultado{resultCount !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Marca */}
      <div>
        <label className="block text-sm font-medium text-brand-gray mb-3">
          Marca
        </label>
        <select
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
          className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
        >
          <option value="">Todas as marcas</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Ano */}
      <div>
        <label className="block text-sm font-medium text-brand-gray mb-3">
          Ano
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="number"
              placeholder="De"
              value={filters.minYear}
              onChange={(e) => handleFilterChange('minYear', parseInt(e.target.value) || yearRange.min)}
              min={yearRange.min}
              max={yearRange.max}
              className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Até"
              value={filters.maxYear}
              onChange={(e) => handleFilterChange('maxYear', parseInt(e.target.value) || yearRange.max)}
              min={yearRange.min}
              max={yearRange.max}
              className="w-full bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
            />
          </div>
        </div>
      </div>

      {/* Preço */}
      <div>
        <label className="block text-sm font-medium text-brand-gray mb-3">
          Faixa de Preço
        </label>
        <div className="space-y-4">
          <div>
            <input
              type="range"
              min={priceRange.min}
              max={priceRange.max}
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
              className="price-slider w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-brand-gray mt-2">
              <span>{formatPrice(priceRange.min)}</span>
              <span className="text-brand-gold font-bold">{formatPrice(filters.maxPrice)}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Preço mínimo"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value) || priceRange.min)}
              className="w-full bg-black/30 border border-gray-700 rounded-md px-3 py-2 text-sm text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
            />
            <input
              type="number"
              placeholder="Preço máximo"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value) || priceRange.max)}
              className="w-full bg-black/30 border border-gray-700 rounded-md px-3 py-2 text-sm text-brand-light focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
            />
          </div>
        </div>
      </div>

      {/* Botão Limpar Filtros */}
      <button
        onClick={clearFilters}
        className="w-full border border-brand-gold text-brand-gold px-4 py-3 rounded-md font-medium hover:bg-brand-gold hover:text-brand-dark transition-colors"
      >
        Limpar Filtros
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-brand-dark border border-gray-800 rounded-lg h-fit sticky top-24">
        {sidebarContent}
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-dark p-4 rounded-full shadow-lg hover:bg-brand-gold-light transition-colors"
      >
        <Filter className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onToggle}
          />
          <motion.div
            className="relative ml-auto w-80 max-w-full bg-brand-dark border-l border-gray-800 h-full overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold text-brand-light">Filtros</h3>
              <button
                onClick={onToggle}
                className="text-brand-gray hover:text-brand-light"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {sidebarContent}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default VehicleFilters;

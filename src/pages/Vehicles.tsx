import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import VehicleFilters from '../components/VehicleFilters';
import { vehicles, getYearRange, getPriceRange } from '../data/vehicles';
import { VehicleFilters as FilterType } from '../types/Vehicle';

const Vehicles: React.FC = () => {
  const yearRange = getYearRange();
  const priceRange = getPriceRange();
  
  const [filters, setFilters] = useState<FilterType>({
    brand: '',
    minYear: yearRange.min,
    maxYear: yearRange.max,
    minPrice: priceRange.min,
    maxPrice: priceRange.max
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      if (filters.brand && vehicle.brand !== filters.brand) return false;
      if (vehicle.year < filters.minYear || vehicle.year > filters.maxYear) return false;
      if (vehicle.price < filters.minPrice || vehicle.price > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <div className="pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark"></div>
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-4 bg-brand-dark border border-gray-800 rounded-full mb-4">
            <Car className="w-8 h-8 text-brand-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-light">
            Veículos Exclusivos
          </h1>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Explore nossa seleção de veículos blindados, prontos para oferecer a máxima segurança com estilo.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <VehicleFilters
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
            resultCount={filteredVehicles.length}
          />

          {/* Vehicle Grid */}
          <div className="flex-1">
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-16">
                <Car className="w-16 h-16 text-brand-gray mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-2">
                  Nenhum veículo encontrado
                </h3>
                <p className="text-brand-gray">
                  Tente ajustar os filtros para encontrar mais resultados.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-brand-light">
                    {filteredVehicles.length} veículo{filteredVehicles.length !== 1 ? 's' : ''} encontrado{filteredVehicles.length !== 1 ? 's' : ''}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredVehicles.map((vehicle, index) => (
                    <VehicleCard 
                      key={vehicle.id} 
                      vehicle={vehicle} 
                      index={index}
                    />
                  ))}
                </div>
                
                {filteredVehicles.length >= 12 && (
                  <div className="text-center mt-16">
                    <button className="border border-brand-gold text-brand-gold px-8 py-3 rounded-full font-bold hover:bg-brand-gold hover:text-brand-dark transition-colors">
                      Carregar Mais
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

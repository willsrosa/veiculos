export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  armorLevel: string;
  fuelType: string;
  transmission: string;
  description: string;
  features: string[];
}

export interface VehicleFilters {
  brand: string;
  minYear: number;
  maxYear: number;
  minPrice: number;
  maxPrice: number;
}

import { faker } from '@faker-js/faker';
import { Vehicle } from '../types/Vehicle';

const brandModels = {
  'BMW': ['X5', 'X6', 'M5 Competition', 'Series 7', 'iX'],
  'Mercedes-Benz': ['Classe S 580', 'Classe G 63 AMG', 'AMG GT', 'EQS 580', 'Maybach S-Class'],
  'Audi': ['A8 L', 'Q7', 'Q8', 'RS6 Avant', 'e-tron GT'],
  'Volvo': ['XC90 Recharge', 'XC60 T8', 'S90'],
  'Toyota': ['Hilux SW4 Diamond', 'Corolla Cross GR-Sport', 'RAV4 Hybrid'],
  'Porsche': ['911 Turbo S', 'Cayenne Turbo GT', 'Panamera E-Hybrid', 'Taycan Turbo S'],
  'Ferrari': ['SF90 Stradale', '296 GTB', 'Roma']
};

const brands = Object.keys(brandModels);
const armorLevels = ['IIIA', 'III'];
const fuelTypes = ['Gasolina', 'Flex', 'Diesel', 'Híbrido'];
const transmissions = ['Automática', 'CVT'];

const features = [
  'Vidros blindados AGP B33',
  'Manta de aramida balística',
  'Pneus run-flat Michelin',
  'Sistema de comunicação por interfone',
  'Ar condicionado digital dual-zone',
  'Suspensão reforçada com molas especiais',
  'Freios a disco de alta performance',
  'Proteção de aço balístico no teto e portas',
  'Central multimídia com Apple CarPlay/Android Auto',
  'Câmeras de segurança 360 graus'
];

const carImages = [
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1614200179396-2bdb74eb9874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570355118264-f6f52241b71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616788494707-ec4e936d4faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1568605117036-5fe5e7167b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1604739828677-83123df5f7e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

const generateVehicle = (index: number): Vehicle => {
  const brand = faker.helpers.arrayElement(brands) as keyof typeof brandModels;
  const model = faker.helpers.arrayElement(brandModels[brand]);
  const year = faker.number.int({ min: 2020, max: 2025 });
  const basePrice = faker.number.int({ min: 250000, max: 1500000 });
  
  return {
    id: faker.string.uuid(),
    brand,
    model: `${brand} ${model}`,
    year,
    price: Math.round(basePrice / 1000) * 1000,
    image: carImages[index % carImages.length],
    mileage: faker.number.int({ min: 0, max: 40000 }),
    armorLevel: faker.helpers.arrayElement(armorLevels),
    fuelType: faker.helpers.arrayElement(fuelTypes),
    transmission: faker.helpers.arrayElement(transmissions),
    description: `Veículo blindado ${brand} ${model} com proteção balística de alto nível, ideal para quem busca máxima segurança sem abrir mão do conforto e da elegância.`,
    features: faker.helpers.arrayElements(features, { min: 4, max: 7 })
  };
};

export const vehicles: Vehicle[] = Array.from({ length: 24 }, (_, index) => generateVehicle(index));

export const getBrands = (): string[] => {
  return Array.from(new Set(vehicles.map(v => v.brand))).sort();
};

export const getYearRange = (): { min: number; max: number } => {
  const years = vehicles.map(v => v.year);
  return {
    min: Math.min(...years),
    max: Math.max(...years)
  };
};

export const getPriceRange = (): { min: number; max: number } => {
  const prices = vehicles.map(v => v.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

'use client';

import PlantCard from './PlantCard';

interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  category: string;
  description: string;
  careInstructions: {
    light: string;
    water: string;
    temperature: string;
    humidity: string;
  };
  image: string;
  featured: boolean;
}

interface PlantGridProps {
  plants: Plant[];
  onPlantClick: (plant: Plant) => void;
}

export default function PlantGrid({ plants, onPlantClick }: PlantGridProps) {
  if (plants.length === 0) {
    return (
      <div className="col-span-full text-center py-16">
        <div className="text-6xl mb-4">🌱</div>
        <p className="text-xl text-text-secondary">
          No plants found matching your filters.
        </p>
        <p className="text-sm text-text-secondary mt-2">
          Try selecting different categories or view all plants.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onClick={onPlantClick} />
      ))}
    </div>
  );
}

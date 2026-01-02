'use client';

import { useState, useEffect } from 'react';
import PlantFilters from '@/components/PlantFilters';
import PlantGrid from '@/components/PlantGrid';
import PlantModal from '@/components/PlantModal';
import plantsData from '@/data/plants.json';

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

export default function PlantsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plantsData as Plant[]);
  const [modalPlant, setModalPlant] = useState<Plant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter plants based on selected categories
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredPlants(plantsData as Plant[]);
    } else {
      const filtered = (plantsData as Plant[]).filter((plant) =>
        selectedCategories.includes(plant.category)
      );
      setFilteredPlants(filtered);
    }
  }, [selectedCategories]);

  const handlePlantClick = (plant: Plant) => {
    setModalPlant(plant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalPlant(null), 300);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Our Plant Collection
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Browse our complete catalog of indoor, outdoor, and flowering plants.
            Find the perfect plant for your space.
          </p>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <PlantFilters
              selectedCategories={selectedCategories}
              onFilterChange={setSelectedCategories}
            />
          </aside>

          {/* Plants Grid */}
          <div className="flex-1">
            {/* Plant Count */}
            <div className="mb-6">
              <p className="text-text-secondary">
                Showing <span className="font-semibold text-primary">{filteredPlants.length}</span> plant
                {filteredPlants.length !== 1 ? 's' : ''}
                {selectedCategories.length > 0 && (
                  <span>
                    {' '}
                    in{' '}
                    <span className="font-semibold">
                      {selectedCategories.join(', ')}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* Plants Grid */}
            <PlantGrid plants={filteredPlants} onPlantClick={handlePlantClick} />
          </div>
        </div>
      </div>

      {/* Plant Modal */}
      <PlantModal
        plant={modalPlant}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

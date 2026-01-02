'use client';

import { useState } from 'react';
import Link from 'next/link';
import PlantCard from './PlantCard';
import PlantModal from './PlantModal';
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

export default function FeaturedPlants() {
  const [modalPlant, setModalPlant] = useState<Plant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get featured plants (max 8)
  const featuredPlants = (plantsData as Plant[])
    .filter((plant) => plant.featured)
    .slice(0, 8);

  const handlePlantClick = (plant: Plant) => {
    setModalPlant(plant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalPlant(null), 300);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
          Featured Plants
        </h2>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onClick={handlePlantClick} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/plants"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors shadow-md"
          >
            View All Plants
          </Link>
        </div>
      </div>

      {/* Plant Modal */}
      <PlantModal
        plant={modalPlant}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

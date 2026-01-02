'use client';

import Image from 'next/image';
import { useState } from 'react';

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

interface PlantCardProps {
  plant: Plant;
  onClick: (plant: Plant) => void;
}

export default function PlantCard({ plant, onClick }: PlantCardProps) {
  const [isActive, setIsActive] = useState(false);

  // Handle touch events for mobile 3D effect
  const handleTouchStart = () => {
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsActive(false), 300);
  };

  // Truncate description to max 60 characters
  const truncatedDescription =
    plant.description.length > 60
      ? plant.description.substring(0, 60) + '...'
      : plant.description;

  return (
    <div className="card-3d-container">
      <div
        className={`card-3d bg-white rounded-lg overflow-hidden border border-gray-200 cursor-pointer ${
          isActive ? 'card-3d-active' : ''
        }`}
        onClick={() => onClick(plant)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Container - Fixed aspect ratio 4:3 */}
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-primary-dark mb-1">
            {plant.name}
          </h3>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-light text-primary mb-2">
            {plant.category}
          </span>

          {/* Description Excerpt */}
          <p className="text-sm text-text-secondary leading-relaxed">
            {truncatedDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

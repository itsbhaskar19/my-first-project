'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

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

interface PlantModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PlantModal({ plant, isOpen, onClose }: PlantModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.classList.add('modal-open');

      // Handle ESC key to close modal
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen, onClose]);

  if (!isOpen || !plant) return null;

  // Handle click on overlay to close modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="modal-content bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto md:min-h-[500px]">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-8 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Plant Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-2">
                {plant.name}
              </h2>

              {plant.scientificName && (
                <p className="text-sm italic text-text-secondary mb-4">
                  {plant.scientificName}
                </p>
              )}

              {/* Category Tag */}
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-accent-light text-primary mb-4">
                {plant.category}
              </span>

              {/* Description */}
              <p className="text-text-primary leading-relaxed mb-6">
                {plant.description}
              </p>

              {/* Care Instructions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-dark mb-4">
                  Care Instructions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">☀️</span>
                    <div>
                      <p className="font-semibold text-primary">Light</p>
                      <p className="text-sm text-text-secondary">
                        {plant.careInstructions.light}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💧</span>
                    <div>
                      <p className="font-semibold text-primary">Water</p>
                      <p className="text-sm text-text-secondary">
                        {plant.careInstructions.water}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🌡️</span>
                    <div>
                      <p className="font-semibold text-primary">Temperature</p>
                      <p className="text-sm text-text-secondary">
                        {plant.careInstructions.temperature}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💨</span>
                    <div>
                      <p className="font-semibold text-primary">Humidity</p>
                      <p className="text-sm text-text-secondary">
                        {plant.careInstructions.humidity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="inline-block w-full text-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
              >
                Contact Us for Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#ECEC75' }}>
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 max-w-4xl">
          Lakshmi Shanmukhi Nursery Gardens
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-text-primary mb-8 max-w-2xl">
          Discover Premium Plants for Your Home & Garden
        </p>
        <Link
          href="/plants"
          className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all transform hover:scale-105"
        >
          Explore Our Collection
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 bounce-animation">
          <svg
            className="w-6 h-6 text-primary-dark"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

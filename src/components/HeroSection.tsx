'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background (Desktop/Tablet) */}
      {!videoError && (
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-fallback.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback Image for Mobile or if video fails */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url('/images/hero-fallback.jpg')`,
        }}
      ></div>

      {/* Show fallback on video error (desktop) */}
      {videoError && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('/images/hero-fallback.jpg')`,
          }}
        ></div>
      )}

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl" style={{ color: '#ECEC75' }}>
          Lakshmi Shanmukhi Nursery Gardens
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
          Discover Premium Plants for Your Home & Garden
        </p>
        <Link
          href="/plants"
          className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg"
        >
          Explore Our Collection
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 bounce-animation">
          <svg
            className="w-6 h-6 text-white"
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

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/plants', label: 'Plants' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-primary-dark hover:text-primary transition-colors"
            onClick={closeMobileMenu}
          >
            Lakshmi Shanmukhi Nursery Gardens
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3 py-2 text-sm font-medium transition-colors border-b-2
                    ${
                      isActive
                        ? 'text-primary border-primary'
                        : 'text-gray-700 border-transparent hover:text-primary hover:border-primary-light'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mobile-menu-enter bg-white border-t border-gray-200"
          style={{
            position: 'fixed',
            top: '64px',
            right: 0,
            width: '100%',
            maxWidth: '320px',
            height: 'calc(100vh - 64px)',
            boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
            zIndex: 40,
          }}
        >
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block px-4 py-3 rounded-md text-base font-medium transition-colors
                    ${
                      isActive
                        ? 'text-white bg-primary'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                    }
                  `}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-30"
          style={{ top: '64px' }}
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>
  );
}

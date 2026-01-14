'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/gallery', label: 'Galerie' },
  ];

  return (
    <header className="bg-ocean-deep text-foam shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Titre */}
          <Link href="/" className="text-2xl font-bold hover:text-ocean-light transition-colors">
            🌊 Océan Bleu
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foam hover:text-ocean-light transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foam transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-foam transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-foam transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            ></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
            }`}
        >
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-foam hover:text-ocean-light transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/gallery', label: 'Galerie' },
  ];

  const isActive = (href: string) => pathname === href;

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0
    },
    open: {
      opacity: 1,
      height: "auto" as const,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="bg-ocean-deep text-foam shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-ocean-deep/95"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Titre */}
          <Link href="/" className="group flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-3xl"
            >
              🌊
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold hover:text-ocean-light transition-colors duration-300"
            >
              Marin life
            </motion.span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-foam font-medium transition-colors duration-300 group ${
                      isActive(link.href) ? 'text-ocean-light' : 'hover:text-ocean-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger Menu Button (Mobile) */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-6 h-0.5 bg-foam"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? 20 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-foam"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="block w-6 h-0.5 bg-foam"
            />
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col pb-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={link.href}
                      className={`block text-foam font-medium py-3 px-2 rounded-md transition-all duration-300 ${
                        isActive(link.href)
                          ? 'bg-ocean-light/20 text-ocean-light'
                          : 'hover:bg-ocean-light/10 hover:text-ocean-light hover:pl-4'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

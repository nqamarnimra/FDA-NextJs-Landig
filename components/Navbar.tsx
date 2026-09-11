'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`w-full p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 shadow-md`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold">
          MyBrand
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#hero">Home</Link>
          <Link href="#catalog">Features</Link>
          <Link href="#contact">Contact</Link>
          
          {/* Dark Mode Button */}
          <button 
            onClick={onToggleTheme}
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Mobile Controls (Dark Mode Toggle + Hamburger Button) */}
        <div className="flex md:hidden items-center space-x-3">
          <button 
            onClick={onToggleTheme}
            className="p-1 border rounded-md text-xs"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button 
            onClick={toggleMenu}
            className="focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-300">
          <Link href="#hero" onClick={closeMenu}>Home</Link>
          <Link href="#catalog" onClick={closeMenu}>Features</Link>
          <Link href="#contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
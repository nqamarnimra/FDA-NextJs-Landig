'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main className={isDarkMode ? 'min-h-screen flex flex-col bg-slate-900 text-white' : 'min-h-screen flex flex-col bg-slate-50 text-slate-900'}>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((isDark) => !isDark)} />
      <HeroSection isDarkMode={isDarkMode} />

      <ProductCatalog isDarkMode={isDarkMode} />

      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}
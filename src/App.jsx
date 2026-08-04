import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoModal from './components/DemoModal';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

/**
 * Main Application Root
 * Veltrix SaaS Landing Page — Modern AI Autonomous Agents Platform
 */
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Toggle Theme Function (Dark / Light)
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  };

  useEffect(() => {
    // Ensure dark theme is applied by default
    document.body.classList.add('dark-theme');
  }, []);

  return (
    <div className="veltrix-app">
      {/* 1. Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenDemo={() => setIsDemoModalOpen(true)} 
      />

      {/* 2. Hero Section */}
      <main>
        <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* 3. Logo Cloud */}
        <LogoCloud />

        {/* 4. Core Features Section */}
        <Features />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. Product Showcase Section */}
        <ProductShowcase />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. Pricing Section */}
        <Pricing />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Call to Action Banner */}
        <CTABanner onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Demo Video Modal Popup */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}

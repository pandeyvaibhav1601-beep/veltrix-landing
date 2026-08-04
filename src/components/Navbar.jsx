import React, { useState, useEffect } from 'react';
import { Bot, Sun, Moon, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

/**
 * Navbar Component
 * Features:
 * - Sticky positioning with backdrop-blur transition on scroll
 * - Dark / Light theme toggle with state persistence
 * - Mobile responsive collapsible menu
 * - Animated link hover states
 */
export default function Navbar({ theme, toggleTheme, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active for smooth phone UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Product', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <div className="brand-icon">
            <Bot size={26} className="brand-logo-svg" />
            <span className="brand-pulse"></span>
          </div>
          <span className="brand-name">
            Veltrix<span className="brand-dot">.ai</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                  <span className="link-underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Controls */}
        <div className="navbar-actions">
          {/* Dark/Light Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Buttons */}
          <button onClick={onOpenDemo} className="btn-demo-nav">
            <Sparkles size={16} /> Demo
          </button>

          <a href="#pricing" className="btn btn-primary btn-nav-cta">
            <span>Get Started Free</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-actions">
              <button onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }} className="btn btn-secondary w-full">
                Watch Demo Video
              </button>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full">
                Start 14-Day Trial
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar Custom Styles */}
      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 0.8rem 0;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .brand-icon {
          position: relative;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .brand-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 100%;
          height: 10px;
          background: var(--accent-cyan);
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(6, 182, 212, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
        }

        .brand-name {
          font-family: var(--font-heading);
          letter-spacing: -0.03em;
        }

        .brand-dot {
          color: var(--accent-cyan);
        }

        .desktop-nav {
          display: flex;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2.2rem;
        }

        .nav-link {
          position: relative;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .link-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover .link-underline {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
          touch-action: manipulation;
        }

        .theme-toggle-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: rotate(15deg);
        }

        .btn-demo-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .btn-demo-nav:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: var(--accent-cyan);
          transform: translateY(-1px);
        }

        .btn-nav-cta {
          padding: 0.6rem 1.4rem;
          font-size: 0.9rem;
        }

        .mobile-menu-btn {
          display: none;
          color: var(--text-primary);
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          touch-action: manipulation;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-color);
          padding: 2rem 1.5rem 3rem 1.5rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.6);
          z-index: 999;
          max-height: calc(100dvh - 70px);
          overflow-y: auto;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .mobile-nav-link {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 0.5rem 0;
          display: block;
          touch-action: manipulation;
        }

        .mobile-nav-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        @media (max-width: 992px) {
          .desktop-nav, .btn-demo-nav, .btn-nav-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}

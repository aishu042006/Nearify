import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple, robust scroll spy
      const sections = ['home', 'features', 'opportunities', 'how-it-works', 'contact'];
      const scrollPosition = window.scrollY + 120; // Nav height offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), id: 'home', href: '#home' },
    { name: t('features'), id: 'features', href: '#features' },
    { name: t('opportunities'), id: 'opportunities', href: '#opportunities' },
    { name: t('howItWorks'), id: 'howItWorks', href: '#how-it-works' },
    { name: t('contact'), id: 'contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md py-3 border-b border-border-theme/80 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <Logo variant="full" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                    isActive ? 'text-primary-theme' : 'text-text-muted-theme hover:text-text-theme'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-theme rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-5">
            {!isAuthenticated && (
              <Link
                to="/login?mode=login"
                className="text-sm font-semibold text-text-muted-theme hover:text-text-theme transition-colors cursor-pointer"
              >
                {t('signIn')}
              </Link>
            )}
            <Link
              to={isAuthenticated ? "/dashboard" : "/login?mode=signup"}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary-theme hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
            >
              {isAuthenticated ? t('dashboard') : t('getStarted')}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Actions Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-muted-theme hover:text-text-theme focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-border-theme"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive ? 'bg-primary-theme/5 text-primary-theme font-semibold' : 'text-text-muted-theme hover:bg-slate-50 hover:text-text-theme'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 px-3 flex flex-col gap-2.5">
                {!isAuthenticated && (
                  <Link
                    to="/login?mode=login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                  >
                    {t('signIn')}
                  </Link>
                )}
                <Link
                  to={isAuthenticated ? "/dashboard" : "/login?mode=signup"}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-base font-semibold text-white bg-primary-theme hover:bg-primary-hover shadow-sm cursor-pointer"
                >
                  {isAuthenticated ? t('dashboard') : t('getStarted')}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

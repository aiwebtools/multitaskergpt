
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo.svg" alt="MULTITASKER GPT" className="h-7 sm:h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-xs sm:text-sm py-2 px-4 text-black font-extrabold whitespace-nowrap" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ACCESS MULTITASKER GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-glow transition-colors text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-glow transition-colors text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="text-white hover:text-cyber-glow transition-colors text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none active:scale-95 transition-transform touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - CSS transition instead of conditional render for instant response */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-md pt-16 transition-all duration-200 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ willChange: 'opacity, transform' }}
      >
        <div className="flex flex-col space-y-4 p-5 pt-6">
          <button 
            onClick={closeMobileMenu}
            className="absolute top-3.5 right-3.5 text-white p-2 active:scale-95 transition-transform touch-manipulation"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <a 
            href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
            className="btn-primary text-center py-3 px-5 text-sm text-black font-extrabold rounded-lg" 
            onClick={closeMobileMenu}
            target="_blank" 
            rel="noopener noreferrer"
          >
            ACCESS MULTITASKER GPT
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-glow active:text-cyber-glow transition-colors py-3 px-4 rounded-md text-base text-center font-semibold touch-manipulation" 
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-glow active:text-cyber-glow transition-colors py-3 px-4 rounded-md text-base text-center font-semibold touch-manipulation" 
            onClick={closeMobileMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="text-white hover:text-cyber-glow active:text-cyber-glow transition-colors py-3 px-4 rounded-md text-base text-center font-semibold touch-manipulation" 
            onClick={closeMobileMenu}
            target="_blank" 
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

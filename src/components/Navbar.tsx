
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-dark/80 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="MULTITASKER GPT" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
               className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">
              ACCESS MULTITASKER GPT
            </a>
            <a href="#faq" className="text-white hover:text-cyber-glow transition-colors">FAQ</a>
            <a href="#disclaimer" className="text-white hover:text-cyber-glow transition-colors">Disclaimer</a>
            <a href="https://www.aiwebtools.ai" className="text-white hover:text-cyber-glow transition-colors" target="_blank" rel="noopener noreferrer">
              More AI Tools
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 rounded-md"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-lg overflow-hidden animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-center" 
              onClick={() => setMobileMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer"
            >
              ACCESS MULTITASKER GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-glow transition-colors py-2 px-4 rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-glow transition-colors py-2 px-4 rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-white hover:text-cyber-glow transition-colors py-2 px-4 rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

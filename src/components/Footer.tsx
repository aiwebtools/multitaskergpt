
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark/90 border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-3 sm:mb-4">
              <img src="/logo.svg" alt="MULTITASKER GPT" className="h-8 sm:h-10" />
            </a>
            <blockquote className="italic text-gray-400 mt-2 mb-4 text-xs sm:text-sm">
              "Without data, you're just another person with an opinion."
              <footer className="text-gray-500 mt-1">— W. Edwards Deming</footer>
            </blockquote>
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-xs sm:text-sm py-2 px-4 text-black font-extrabold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              ACCESS MULTITASKER GPT
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber text-base sm:text-lg text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-glow transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-glow transition-colors">Disclaimer</a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="text-gray-400 hover:text-cyber-glow transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-cyber-glow transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-gray-400 hover:text-cyber-glow transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-cyber text-base sm:text-lg text-white mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3 text-sm">
              <a 
                href="tel:+14758008096" 
                className="flex items-center text-gray-400 hover:text-cyber-glow transition-colors"
              >
                <Phone size={14} className="mr-2" />
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-gray-400 hover:text-cyber-glow transition-colors"
              >
                <Mail size={14} className="mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>

            <div className="mt-5 sm:mt-8">
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-block py-2 px-4 sm:py-2 sm:px-6 rounded-full cyber-border bg-cyber-dark/60 text-white text-sm hover:bg-cyber-dark hover:text-cyber-glow transition-all duration-300 hover:shadow-[0_0_10px_0_rgba(0,238,255,0.4)]"
                target="_blank" 
                rel="noopener noreferrer"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-gray-400 hover:text-cyber-glow transition-colors text-xs sm:text-sm"
            target="_blank" 
            rel="noopener noreferrer"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

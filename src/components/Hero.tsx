
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger immediate fade-in animations on mount
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.fade-in-immediate');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, index * 150);
      });
    }
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[95vh] flex items-center justify-center pt-16 sm:pt-20 pb-12 divine-spacing" ref={containerRef} role="banner">
      <div className="section text-center px-6 sm:px-8">
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          <div className="fade-in-immediate opacity-0">
            <span className="inline-block py-2 px-4 rounded-full bg-cyber-glow/15 text-cyber-glow text-sm sm:text-base font-semibold mb-6 sm:mb-8 border border-cyber-glow/40 divine-badge" role="banner">
              NEXT GENERATION MULTITASKING AI
            </span>
          </div>
          
          <h1 
            ref={titleRef} 
            className="heading-xl fade-in-immediate opacity-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl px-4 mb-8"
            itemProp="name"
          >
            <span className="title-gradient animate-divine-glow-text divine-title">MULTITASKER GPT</span>
          </h1>
          
          <p className="subtitle fade-in-immediate opacity-0 max-w-4xl mx-auto px-4 sm:px-6 text-base sm:text-lg md:text-xl leading-relaxed divine-text-glow" itemProp="description">
            The advanced AI model designed to handle multiple complex tasks simultaneously, 
            ensuring comprehensive web research and detailed execution for each task.
          </p>

          {/* SEO-optimized hidden content for keywords */}
          <div className="sr-only" aria-hidden="true">
            <h2>Free AI Tools and AI Web Tools by AI WEB TOOLS</h2>
            <p>Discover powerful free AI tools for productivity, research, and automation. MULTITASKER GPT is part of our comprehensive suite of AI web tools designed for businesses and individuals seeking advanced artificial intelligence solutions.</p>
            <ul>
              <li>Free artificial intelligence tools</li>
              <li>Advanced AI task management</li>
              <li>AI productivity solutions</li>
              <li>Web-based AI tools</li>
              <li>Machine learning applications</li>
              <li>Automated research tools</li>
            </ul>
          </div>
          
          <div className="pt-8 fade-in-immediate opacity-0">
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-base sm:text-lg inline-block py-4 sm:py-5 px-8 sm:px-10 divine-primary-button"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Access MULTITASKER GPT - Free AI Tool"
              itemProp="url"
            >
              ACCESS MULTITASKER GPT
            </a>
          </div>

          <blockquote className="mt-10 sm:mt-14 italic text-base sm:text-lg text-gray-300 fade-in-immediate opacity-0 divine-quote" cite="W. Edwards Deming">
            "Without data, you're just another person with an opinion."
            <footer className="text-gray-400 mt-3 text-sm sm:text-base">— W. Edwards Deming</footer>
          </blockquote>
        </div>

        {/* Divine floating elements with enhanced buttons */}
        <nav className="mt-12 sm:mt-16 relative h-32 sm:h-40 fade-in-immediate opacity-0" role="navigation" aria-label="Main Actions">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col gap-5 sm:gap-6 w-full justify-center px-6">
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="divine-cyber-border rounded-xl px-6 sm:px-8 py-4 sm:py-5 bg-cyber-blue/25 backdrop-blur-lg hover:animate-divine-pulse-glow transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,238,255,0.8)] text-sm sm:text-base divine-button-primary"
              aria-label="Try MULTITASKER GPT AI Tool Now"
            >
              <span className="text-cyber-glow font-cyber font-bold">TRY IT NOW</span>
            </a>
            
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="divine-cyber-border rounded-xl px-6 sm:px-8 py-4 sm:py-5 bg-cyber-dark/70 backdrop-blur-lg hover:animate-divine-pulse-glow transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,238,255,0.8)] text-sm sm:text-base divine-button-secondary"
              aria-label="Explore More Free AI Tools"
            >
              <span className="text-cyber-glow font-cyber font-bold">MORE AI TOOLS</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Hero;

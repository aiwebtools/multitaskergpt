
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-12 sm:pt-16 pb-8" ref={containerRef}>
      <div className="section text-center px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-cyber-glow/10 text-cyber-glow text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-cyber-glow/30">
              NEXT GENERATION AI
            </span>
          </div>
          
          <h1 
            ref={titleRef} 
            className="heading-xl opacity-0 text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="title-gradient animate-glow-text">MULTITASKER GPT</span>
          </h1>
          
          <p className="subtitle animate-on-scroll opacity-0 max-w-3xl mx-auto px-3 sm:px-4 text-sm sm:text-base md:text-lg" style={{ animationDelay: '0.6s' }}>
            The advanced AI model designed to handle multiple complex tasks simultaneously, 
            ensuring comprehensive web research and detailed execution for each task.
          </p>
          
          <div className="pt-4 animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-sm sm:text-base inline-block py-2 sm:py-3 px-4 sm:px-6"
              target="_blank" 
              rel="noopener noreferrer"
            >
              ACCESS MULTITASKER GPT
            </a>
          </div>

          <blockquote className="mt-6 sm:mt-8 italic text-sm sm:text-base text-gray-300 animate-on-scroll opacity-0 px-4" style={{ animationDelay: '1s' }}>
            "Without data, you're just another person with an opinion."
            <footer className="text-gray-400 mt-2 text-xs sm:text-sm">— W. Edwards Deming</footer>
          </blockquote>
        </div>

        {/* 3D Floating Element with buttons */}
        <div className="mt-8 sm:mt-12 relative h-24 sm:h-32 animate-on-scroll opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center px-4">
            <button 
              onClick={scrollToFeatures}
              className="cyber-border rounded-lg px-4 sm:px-6 py-2 sm:py-3 bg-cyber-dark/60 backdrop-blur-md hover:animate-pulse-glow transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] text-xs sm:text-sm"
            >
              <span className="text-cyber-glow font-cyber">SCROLL DOWN</span>
            </button>
            
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-border rounded-lg px-4 sm:px-6 py-2 sm:py-3 bg-cyber-blue/20 backdrop-blur-md hover:animate-pulse-glow transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] text-xs sm:text-sm"
            >
              <span className="text-cyber-glow font-cyber">TRY IT NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

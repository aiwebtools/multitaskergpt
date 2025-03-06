
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

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16" ref={containerRef}>
      <div className="section text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block py-1 px-3 rounded-full bg-cyber-glow/10 text-cyber-glow text-sm font-semibold mb-4 border border-cyber-glow/30">
              NEXT GENERATION AI
            </span>
          </div>
          
          <h1 
            ref={titleRef} 
            className="heading-xl opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="title-gradient animate-glow-text">MULTITASKER GPT</span>
          </h1>
          
          <p className="subtitle animate-on-scroll opacity-0 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
            The advanced AI model designed to handle multiple complex tasks simultaneously, 
            ensuring comprehensive web research and detailed execution for each task.
          </p>
          
          <div className="pt-4 animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
              className="btn-primary text-lg inline-block"
              target="_blank" 
              rel="noopener noreferrer"
            >
              ACCESS MULTITASKER GPT
            </a>
          </div>

          <blockquote className="mt-10 italic text-lg text-gray-300 animate-on-scroll opacity-0" style={{ animationDelay: '1s' }}>
            "Without data, you're just another person with an opinion."
            <footer className="text-gray-400 mt-2">— W. Edwards Deming</footer>
          </blockquote>
        </div>

        {/* 3D Floating Element */}
        <div className="mt-16 relative h-32 animate-on-scroll opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-float">
            <div className="cyber-border rounded-lg px-6 py-3 bg-cyber-dark/60 backdrop-blur-md animate-pulse-glow">
              <span className="text-cyber-glow font-cyber text-sm">SCROLL DOWN TO LEARN MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

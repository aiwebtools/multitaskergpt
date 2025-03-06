
import React, { useEffect, useRef } from 'react';

const VideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.2
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section className="section py-24 bg-cyber-dark/30" id="video">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4 title-gradient inline-block">Hello Master, I am MULTITASKER GPT</h2>
        <p className="subtitle max-w-3xl mx-auto">
          Watch how MULTITASKER GPT efficiently handles multiple complex tasks with precision and detail.
        </p>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto rounded-xl overflow-hidden cyber-border shadow-[0_0_30px_rgba(0,238,255,0.2)] opacity-0">
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe 
            ref={videoRef} 
            className="absolute top-0 left-0 w-full h-full" 
            src="https://www.youtube.com/embed/MCAjBSrrvx4?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&hd=1" 
            title="MULTITASKER GPT Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-cyber-glow font-cyber animate-pulse-glow inline-block py-2 px-4 rounded-md bg-cyber-dark/40 border border-cyber-blue/30">
          Witness the power of simultaneous task execution and comprehensive research
        </p>
      </div>
    </section>
  );
};

export default VideoSection;

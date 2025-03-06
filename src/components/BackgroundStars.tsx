
import React, { useEffect, useRef } from 'react';

const BackgroundStars: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    // Create regular stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity for twinkling effect
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
      
      // Add animation delay for twinkling effect
      star.style.animation = `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      starsContainer.appendChild(star);
    }

    // Create shooting stars with random intervals
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star animate-shooting-star';
      
      // Random position at the top-left area
      const top = Math.random() * 50;
      const left = Math.random() * 50;
      
      shootingStar.style.top = `${top}%`;
      shootingStar.style.left = `${left}%`;
      
      // Random length between 50px and 150px
      const length = Math.random() * 100 + 50;
      shootingStar.style.width = `${length}px`;
      
      starsContainer.appendChild(shootingStar);
      
      // Remove shooting star after animation completes
      setTimeout(() => {
        shootingStar.remove();
      }, 5000);
    };

    // Create shooting stars at random intervals
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to create a shooting star
        createShootingStar();
      }
    }, 1500);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return <div ref={starsContainerRef} className="stars-container"></div>;
};

export default BackgroundStars;

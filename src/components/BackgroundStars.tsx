
import React, { useEffect, useRef } from 'react';

const BackgroundStars: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    // Create divine floating orbs
    for (let i = 0; i < 15; i++) {
      const orb = document.createElement('div');
      orb.className = 'divine-orb';
      
      const size = Math.random() * 8 + 4;
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.left = `${Math.random() * 100}%`;
      orb.style.top = `${Math.random() * 100}%`;
      orb.style.animationDelay = `${Math.random() * 10}s`;
      orb.style.animationDuration = `${Math.random() * 8 + 12}s`;
      
      starsContainer.appendChild(orb);
    }

    // Create regular stars with divine sparkle
    for (let i = 0; i < 300; i++) {
      const star = document.createElement('div');
      star.className = 'star divine-sparkle';
      
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
      star.style.animation = `divine-twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      starsContainer.appendChild(star);
    }

    // Create divine light rays
    for (let i = 0; i < 8; i++) {
      const ray = document.createElement('div');
      ray.className = 'divine-ray';
      ray.style.transform = `rotate(${i * 45}deg)`;
      ray.style.animationDelay = `${i * 0.5}s`;
      starsContainer.appendChild(ray);
    }

    // Enhanced shooting stars
    const createDivineShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star divine-shooting-star';
      
      const top = Math.random() * 50;
      const left = Math.random() * 50;
      
      shootingStar.style.top = `${top}%`;
      shootingStar.style.left = `${left}%`;
      
      const length = Math.random() * 150 + 100;
      shootingStar.style.width = `${length}px`;
      
      starsContainer.appendChild(shootingStar);
      
      setTimeout(() => {
        shootingStar.remove();
      }, 6000);
    };

    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        createDivineShootingStar();
      }
    }, 1200);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div ref={starsContainerRef} className="stars-container divine-background">
      <div className="divine-aurora"></div>
      <div className="divine-nebula"></div>
    </div>
  );
};

export default BackgroundStars;

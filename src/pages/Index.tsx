
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import BackgroundStars from '../components/BackgroundStars';
import DisclaimerPopup from '../components/DisclaimerPopup';
import SEOSitemap from '../components/SEOSitemap';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to sections
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle direct navigation to hash URL
    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden" itemScope itemType="https://schema.org/WebPage">
      <BackgroundStars />
      <DisclaimerPopup />
      <SEOSitemap />
      
      <div className="content-container">
        <Navbar />
        <main role="main">
          <Hero />
          <VideoSection />
          <section id="features">
            <Features />
          </section>
          <Testimonials />
          <FAQ />
          <Disclaimer />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

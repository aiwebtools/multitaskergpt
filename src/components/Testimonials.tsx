
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "MULTITASKER GPT has transformed our research process. Its ability to handle multiple data analysis tasks simultaneously while gathering real-time information has cut our research time in half.",
    stars: 5
  },
  {
    name: "Sophia Chen",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "This tool has become indispensable for our market analysis. The detailed reports and accurate data visualizations give us insights we couldn't get elsewhere, all in a fraction of the time.",
    stars: 5
  },
  {
    name: "Marcus Johnson",
    role: "Research Analyst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "The sequential task execution is brilliant. I can outline all my research needs at once, and MULTITASKER GPT methodically works through each one with incredible thoroughness and accuracy.",
    stars: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    quote: "What sets MULTITASKER GPT apart is its commitment to using only factual data. For financial analysis, knowing I can trust the information it provides gives me confidence in the recommendations I make to clients.",
    stars: 5
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section py-24" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 title-gradient inline-block">User Experiences</h2>
        <p className="subtitle max-w-3xl mx-auto">
          Discover how professionals across different industries are leveraging MULTITASKER GPT to streamline their workflows.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto glass-card p-8 rounded-xl opacity-0 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1">
          <div 
            className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple" 
            style={{ 
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              transition: "width 0.5s ease-in-out"
            }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full overflow-hidden cyber-border flex-shrink-0">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex gap-1 mb-3">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} size={16} className="fill-cyber-glow text-cyber-glow" />
              ))}
            </div>
            <blockquote className="italic text-gray-200 mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="font-cyber text-white">{testimonials[currentIndex].name}</div>
            <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={prevTestimonial} 
            className="p-2 rounded-full cyber-border bg-cyber-dark/60 text-white hover:bg-cyber-dark hover:text-cyber-glow transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index 
                    ? 'bg-cyber-glow' 
                    : 'bg-gray-600 hover:bg-gray-400'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextTestimonial} 
            className="p-2 rounded-full cyber-border bg-cyber-dark/60 text-white hover:bg-cyber-dark hover:text-cyber-glow transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

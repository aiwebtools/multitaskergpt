
import React, { useEffect, useRef } from 'react';
import { FileText, Search, BarChart4, CheckCircle, Layers, Clock, RefreshCcw, Database } from 'lucide-react';

const features = [
  {
    icon: <Layers size={24} className="text-cyber-glow" />,
    title: "Multi-Task Management",
    description: "Handles multiple complex tasks simultaneously with precision and efficiency."
  },
  {
    icon: <Search size={24} className="text-cyber-glow" />,
    title: "Real-Time Web Research",
    description: "Conducts comprehensive web searches to gather accurate, up-to-date information for every task."
  },
  {
    icon: <BarChart4 size={24} className="text-cyber-glow" />,
    title: "Advanced Data Analysis",
    description: "Creates accurate graphs, charts, and visualizations using Python to represent complex data clearly."
  },
  {
    icon: <Database size={24} className="text-cyber-glow" />,
    title: "Reliable Data Sources",
    description: "Never uses simulated or fictional data, ensuring all information is factual and reliable."
  },
  {
    icon: <FileText size={24} className="text-cyber-glow" />,
    title: "Document Compilation",
    description: "Compiles complete, detailed reports and documentation for each task with proper formatting."
  },
  {
    icon: <CheckCircle size={24} className="text-cyber-glow" />,
    title: "Sequential Completion",
    description: "Works through tasks one by one, ensuring each is completed thoroughly before moving to the next."
  },
  {
    icon: <Clock size={24} className="text-cyber-glow" />,
    title: "Efficient Workflow",
    description: "Keeps users informed at every stage with clear progress updates and milestone confirmations."
  },
  {
    icon: <RefreshCcw size={24} className="text-cyber-glow" />,
    title: "Comprehensive Execution",
    description: "Ensures every aspect of each task is thoroughly addressed without cutting corners."
  }
];

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.feature-card');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${0.1 * index}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section py-24" id="features" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4 title-gradient inline-block">Powerful Capabilities</h2>
        <p className="subtitle max-w-3xl mx-auto">
          MULTITASKER GPT combines advanced AI capabilities to deliver comprehensive solutions for complex, multi-faceted projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card glass-card p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,238,255,0.3)] tilt-card opacity-0"
          >
            <div className="w-12 h-12 rounded-full bg-cyber-dark flex items-center justify-center mb-4 cyber-border">
              {feature.icon}
            </div>
            <h3 className="text-xl font-cyber font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://chatgpt.com/g/g-CeNnTrmnZ-multitasker-gpt" 
          className="btn-primary inline-flex items-center gap-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Experience MULTITASKER GPT
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Features;

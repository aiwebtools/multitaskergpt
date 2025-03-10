
import React, { useState, useEffect } from 'react';
import { X, Info, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen and agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show popup after a small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    setIsOpen(false);
    localStorage.setItem('disclaimerAgreed', 'true');
    toast({
      title: "Welcome to Multitasker GPT!",
      description: "You're all set. Enjoy the advanced multitasking experience.",
      duration: 5000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-cyber-black/50 animate-fade-in">
      <div className="relative max-w-md w-full cyber-border rounded-xl overflow-hidden">
        <div className="neo-blur p-5 sm:p-6">
          {/* Header with glow effect */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-cyber-glow/10">
              <Info className="text-cyber-glow h-5 w-5" />
            </div>
            <h2 className="font-cyber text-xl sm:text-2xl text-gradient animate-glow-text">
              USER AGREEMENT
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="ml-auto p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-white" />
            </button>
          </div>
          
          {/* Disclaimer text */}
          <div className="space-y-4 mb-6 text-sm sm:text-base">
            <p className="text-gray-300">
              By using Multitasker GPT, you acknowledge that this tool accesses information from 
              across the web to complete your tasks.
            </p>
            
            <p className="text-gray-300">
              While we strive for accuracy, results may vary based on available data and context. 
              All outputs should be reviewed for accuracy.
            </p>
            
            <p className="text-gray-300">
              We do not store your personal tasks or search history beyond what's needed to 
              improve the service.
            </p>
          </div>
          
          {/* Action button with hover effects */}
          <div className="flex justify-center">
            <button
              onClick={handleAgree}
              className="group relative overflow-hidden font-cyber py-3 px-8 rounded-full bg-cyber-blue/20 cyber-border"
            >
              {/* Background glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Text and icon */}
              <span className="relative flex items-center justify-center gap-2 text-cyber-glow group-hover:text-white transition-colors">
                <CheckCircle className="h-5 w-5 animate-pulse-glow" />
                <span className="font-bold tracking-wider">I AGREE</span>
              </span>
              
              {/* Bottom border glow on hover */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyber-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;

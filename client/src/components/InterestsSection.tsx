import { useEffect, useState, useRef } from 'react';

interface Interest {
  name: string;
  icon: JSX.Element;
  description: string;
}

const InterestsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const interests: Interest[] = [
    {
      name: 'Organic Chemistry',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Benzene ring structure */}
          <polygon points="12,4 16,7 16,13 12,16 8,13 8,7" fill="none" stroke="#1a5f7a" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="5" fill="none" stroke="#1a5f7a" strokeWidth="0.8" strokeDasharray="1,1" />
        </svg>
      ),
      description: 'Researching organic compounds and their applications in pharmaceutical industries'
    },
    {
      name: 'Pharmaceutical Manufacturing',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Flask with pills */}
          <path d="M9,3 L15,3 L15,8 C18,10 18,14 15,16 L9,16 C6,14 6,10 9,8 L9,3 Z" stroke="#1a5f7a" fill="none" />
          <circle cx="10" cy="12" r="1.5" fill="#1a5f7a" />
          <circle cx="14" cy="14" r="1.5" fill="#1a5f7a" />
          <line x1="12" y1="3" x2="12" y2="4" stroke="#1a5f7a" />
          <line x1="9" y1="16" x2="9" y2="21" stroke="#1a5f7a" />
          <line x1="15" y1="16" x2="15" y2="21" stroke="#1a5f7a" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="#1a5f7a" />
        </svg>
      ),
      description: 'Studying pharmaceutical production processes and quality control methods'
    },
    {
      name: 'Unit Operations',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Chemical engineering equipment */}
          <rect x="4" y="12" width="16" height="8" stroke="#1a5f7a" fill="none" />
          <line x1="7" y1="12" x2="7" y2="20" stroke="#1a5f7a" />
          <line x1="12" y1="12" x2="12" y2="20" stroke="#1a5f7a" />
          <line x1="17" y1="12" x2="17" y2="20" stroke="#1a5f7a" />
          <path d="M8,8 C8,5 16,5 16,8 L16,12 L8,12 L8,8 Z" stroke="#1a5f7a" fill="none" />
          <circle cx="12" cy="5" r="2" stroke="#1a5f7a" fill="none" />
        </svg>
      ),
      description: 'Exploring fundamental processes like distillation, extraction, and filtration'
    },
    {
      name: 'Thermodynamics',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Thermodynamics icon with flame and arrows */}
          <path d="M12,21 C8.5,21 6,18.5 6,15 C6,11.5 12,3 12,3 C12,3 18,11.5 18,15 C18,18.5 15.5,21 12,21 Z" stroke="#1a5f7a" fill="none" />
          <path d="M12,17 C13.657,17 15,15.657 15,14 C15,12.343 12,9 12,9 C12,9 9,12.343 9,14 C9,15.657 10.343,17 12,17 Z" stroke="#1a5f7a" fill="#1a5f7a" fillOpacity="0.2" />
          <line x1="8" y1="8" x2="6" y2="6" stroke="#1a5f7a" />
          <line x1="16" y1="8" x2="18" y2="6" stroke="#1a5f7a" />
        </svg>
      ),
      description: 'Analyzing energy transformations and chemical reaction equilibriums'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="interests" ref={sectionRef} className="py-20 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg width="150" height="150" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 10 L70 40 L40 70 L10 40 Z" stroke="#1a5f7a" strokeWidth="2" fill="#1a5f7a" fillOpacity="0.2" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-10 opacity-5">
        <svg width="120" height="120" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="25" stroke="#1a5f7a" strokeWidth="2" fill="#57c5b6" fillOpacity="0.1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-1 bg-primary rounded-full mr-4"></div>
          <h2 className={`text-3xl font-heading font-bold text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hobbies & <span className="text-primary">Interests</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group border border-gray-100 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${200 * index}ms` }}
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transform rotate-90 group-hover:rotate-0 transition-transform duration-500"></div>
              
              {/* Icon container with hover effect */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                {interest.icon}
              </div>
              
              <h3 className="font-heading font-medium text-lg mb-2 text-primary/90">{interest.name}</h3>
              <p className="text-gray-600 text-sm">{interest.description}</p>
              
              {/* Bottom decoration */}
              <div className="h-1 w-12 bg-primary/20 rounded-full mx-auto mt-4 group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

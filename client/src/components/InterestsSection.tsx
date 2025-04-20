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
      name: 'Music',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      ),
      description: 'Listening to diverse genres of music to relax and find inspiration'
    },
    {
      name: 'Badminton',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3"></circle>
          <line x1="12" y1="8" x2="12" y2="14"></line>
          <path d="M5.5 17a6.5 6.5 0 0 0 13 0"></path>
          <path d="M15 17V8l4 9"></path>
        </svg>
      ),
      description: 'Playing badminton regularly to stay active and competitive'
    },
    {
      name: 'Stock Market',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
      description: 'Actively working in the stock market to learn investment strategies'
    },
    {
      name: 'Traveling',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      description: 'Exploring new places to gain diverse perspectives and experiences'
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

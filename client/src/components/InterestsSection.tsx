import { useEffect, useState, useRef } from 'react';

interface Interest {
  name: string;
  icon: string;
  description: string;
}

const InterestsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const interests: Interest[] = [
    {
      name: 'Music',
      icon: 'music',
      description: 'Listening to diverse genres of music to relax and find inspiration'
    },
    {
      name: 'Badminton',
      icon: 'table-tennis-paddle-ball',
      description: 'Playing badminton regularly to stay active and competitive'
    },
    {
      name: 'Stock Market',
      icon: 'chart-line',
      description: 'Actively working in the stock market to learn investment strategies'
    },
    {
      name: 'Traveling',
      icon: 'plane-departure',
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
    <section id="interests" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Hobbies & <span className="text-primary">Interests</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${200 * index}ms` }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas fa-${interest.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="font-heading font-medium mb-2">{interest.name}</h3>
              <p className="text-gray-600 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;

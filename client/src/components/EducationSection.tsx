import { useEffect, useState, useRef } from 'react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  isCompleted: boolean;
  icon: string;
}

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const educationData: Education[] = [
    {
      degree: 'BTech in Chemical Engineering',
      institution: 'MIT Academy of Engineering (MITAOE)',
      period: 'Currently in 1st Year',
      description: 'Focusing on core chemical engineering principles, laboratory techniques, and theoretical foundations.',
      isCompleted: true,
      icon: 'graduation-cap'
    },
    {
      degree: 'Future Specialization',
      institution: 'Exploring options for specialization',
      period: '2024-2027',
      description: 'Planning to specialize in pharmaceutical process engineering and sustainable chemical production.',
      isCompleted: false,
      icon: 'flask'
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
      { threshold: 0.3 }
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
    <section id="education" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My <span className="text-primary">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-50%]"></div>
          
          {educationData.map((item, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${index !== educationData.length - 1 ? 'mb-8' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${300 * index}ms` }}
            >
              <div className={`md:w-1/2 mb-4 md:mb-0 md:pr-12 md:text-right ${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className={`text-xl font-heading font-semibold ${item.isCompleted ? 'text-primary' : 'text-gray-500'} mb-2`}>
                    {item.degree}
                  </h3>
                  <p className="text-gray-700 mb-2">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.period}</p>
                </div>
              </div>
              
              <div className={`z-10 w-10 h-10 flex items-center justify-center ${item.isCompleted ? 'bg-primary' : 'bg-secondary/40'} rounded-full border-4 border-white shadow ${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}>
                <i className={`fas fa-${item.icon} ${item.isCompleted ? 'text-white' : 'text-primary'} text-sm`}></i>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-12 order-3' : 'md:pl-12'}`}>
                <div className="hidden md:block">
                  <p className="text-gray-600 italic">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

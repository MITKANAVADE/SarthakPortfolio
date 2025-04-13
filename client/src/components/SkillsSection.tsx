import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface Expertise {
  name: string;
  icon: string;
  description: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const coreSkills: Skill[] = [
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Critical Thinking', percentage: 90 },
    { name: 'Working Under Pressure', percentage: 80 }
  ];
  
  const expertise: Expertise[] = [
    {
      name: 'Organic Chemistry',
      icon: 'flask',
      description: 'Strong foundation in organic reaction mechanisms and synthesis'
    },
    {
      name: 'Pharmaceutical Manufacturing',
      icon: 'pills',
      description: 'Knowledge of pharmaceutical processes and quality control'
    },
    {
      name: 'Unit Operations',
      icon: 'industry',
      description: 'Understanding of fundamental chemical engineering operations'
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-heading font-semibold mb-6 text-primary">Core Skills</h3>
            
            {coreSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-heading font-semibold mb-6 text-primary">Areas of Expertise</h3>
            
            <div className="space-y-4">
              {expertise.map((area, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <i className={`fas fa-${area.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium">{area.name}</h4>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

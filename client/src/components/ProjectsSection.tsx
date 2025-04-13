import { useEffect, useState, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      title: 'Inventory Management Service',
      description: 'Developed a service to manage inventory efficiently, focusing on accuracy and real-time tracking to optimize stock levels.',
      icon: 'boxes-stacked',
      tags: ['Database Design', 'Process Optimization', 'Chemical Inventory']
    },
    {
      title: 'Predicting Chemical Product Formation Using AI/ML',
      description: 'Working on a project that leverages artificial intelligence and machine learning to predict the formation of chemical products based on various reaction conditions.',
      icon: 'microscope',
      tags: ['Machine Learning', 'Reaction Prediction', 'Data Analysis']
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 opacity-5">
          <defs>
            <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1a5f7a" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        
        {/* Molecule illustrations */}
        <div className="absolute top-20 right-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-10">
            <circle cx="60" cy="40" r="10" fill="#1a5f7a" />
            <circle cx="40" cy="80" r="10" fill="#1a5f7a" />
            <circle cx="80" cy="80" r="10" fill="#1a5f7a" />
            <line x1="60" y1="40" x2="40" y2="80" stroke="#1a5f7a" strokeWidth="2" />
            <line x1="60" y1="40" x2="80" y2="80" stroke="#1a5f7a" strokeWidth="2" />
            <line x1="40" y1="80" x2="80" y2="80" stroke="#1a5f7a" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-10">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" className="opacity-10">
            <circle cx="75" cy="75" r="40" fill="none" stroke="#1a5f7a" strokeWidth="2" />
            <circle cx="75" cy="75" r="60" fill="none" stroke="#1a5f7a" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="75" cy="35" r="8" fill="#57c5b6" />
            <circle cx="75" cy="115" r="8" fill="#57c5b6" />
            <circle cx="35" cy="75" r="8" fill="#57c5b6" />
            <circle cx="115" cy="75" r="8" fill="#57c5b6" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-1 bg-primary rounded-full mr-4"></div>
          <h2 className={`text-3xl font-heading font-bold text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 transform hover:-translate-y-2 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${300 * index}ms` }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary to-transparent opacity-20 z-0"></div>
              
              <div className="h-56 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id={`project-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#1a5f7a" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#project-pattern-${index})`} />
                  </svg>
                </div>
                
                {/* Icon container */}
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  <i className={`fas fa-${project.icon} text-5xl text-primary`}></i>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full border-2 border-primary/20"></div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary group-hover:text-primary/80 transition-colors">{project.title}</h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary/20 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

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
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${300 * index}ms` }}
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <i className={`fas fa-${project.icon} text-5xl text-primary/50`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary/20 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

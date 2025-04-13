import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="about" ref={sectionRef} className="py-20 bg-white relative">
      {/* Decorative chemical icons */}
      <div className="absolute top-10 left-0 opacity-5">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L160 120 L40 120 Z" stroke="#1a5f7a" strokeWidth="2" fill="#1a5f7a" fillOpacity="0.1" />
          <circle cx="100" cy="20" r="15" stroke="#1a5f7a" strokeWidth="2" fill="#57c5b6" fillOpacity="0.1" />
          <circle cx="160" cy="120" r="15" stroke="#1a5f7a" strokeWidth="2" fill="#57c5b6" fillOpacity="0.1" />
          <circle cx="40" cy="120" r="15" stroke="#1a5f7a" strokeWidth="2" fill="#57c5b6" fillOpacity="0.1" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-0 opacity-5">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" stroke="#1a5f7a" strokeWidth="2" fill="#1a5f7a" fillOpacity="0.1" />
          <circle cx="50" cy="50" r="20" stroke="#1a5f7a" strokeWidth="2" fill="#57c5b6" fillOpacity="0.1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-10">
          <div className="w-16 h-1 bg-primary rounded-full mr-4"></div>
          <h2 className={`text-3xl font-heading font-bold text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full ml-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 transform rotate-3">
            <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg shadow-md border border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="48" height="48" stroke="#1a5f7a" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </div>
              </div>
              <div className="font-heading text-xl font-semibold text-center mb-2">Chemical Engineering</div>
              <p className="text-center text-gray-600">Passionate about chemistry and its applications in engineering</p>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-10">
            <p className={`text-gray-700 leading-relaxed mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I am a first-year chemical engineering undergraduate at MITAOE, driven by a passion for the chemical industry. My current goals are to sharpen my technical skills and explore various areas within the field to fully realize its potential.
            </p>
            <p className={`text-gray-700 leading-relaxed mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I have a strong interest in organic chemistry, pharmaceutical manufacturing, and unit operations, and I'm always looking for new ways to innovate and contribute to the industry.
            </p>
            
            <div className={`relative bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg shadow-sm transition-all duration-700 delay-700 border-l-4 border-primary ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <p className="text-gray-700 italic pl-2">
                "I believe that chemical engineering has the potential to solve some of the world's most pressing challenges, from developing sustainable materials to creating more efficient manufacturing processes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

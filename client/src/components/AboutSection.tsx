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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About <span className="text-primary">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className={`text-gray-700 leading-relaxed mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I am a first-year chemical engineering undergraduate at MITAOE, driven by a passion for the chemical industry. My current goals are to sharpen my technical skills and explore various areas within the field to fully realize its potential.
          </p>
          <p className={`text-gray-700 leading-relaxed mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I have a strong interest in organic chemistry, pharmaceutical manufacturing, and unit operations, and I'm always looking for new ways to innovate and contribute to the industry.
          </p>
          <div className={`bg-gray-50 border-l-4 border-primary p-4 rounded shadow-sm transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-gray-700 italic">
              "I believe that chemical engineering has the potential to solve some of the world's most pressing challenges, from developing sustainable materials to creating more efficient manufacturing processes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

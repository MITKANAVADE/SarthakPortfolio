import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-heading font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Sarthak Navade</span>
            </h1>
            <p className={`text-lg md:text-xl mb-6 text-gray-700 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Chemical Engineering Undergraduate at MITAOE
            </p>
            <p className={`text-gray-600 mb-8 max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Passionate about organic chemistry, pharmaceutical manufacturing, and exploring innovations in the chemical industry.
            </p>
            <div className={`flex space-x-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => handleScrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Contact Me
              </button>
              <button 
                onClick={() => handleScrollToSection('projects')}
                className="border-2 border-primary text-primary hover:bg-primary/10 font-medium py-2 px-6 rounded-full transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <svg className="w-full h-full text-gray-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chemistry-themed decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8L5 8M19 12H5M19 16H5" stroke="#1a5f7a" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute top-20 right-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="#57c5b6" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" stroke="#57c5b6" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

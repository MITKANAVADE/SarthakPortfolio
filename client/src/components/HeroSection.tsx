import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Create dynamic particles for background
    const createParticles = () => {
      const container = document.getElementById('home');
      if (!container) return;
      
      const numParticles = 20;
      
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * container.offsetWidth;
        const posY = Math.random() * container.offsetHeight;
        
        // Random delay
        const delay = Math.random() * 15;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
      }
      
      // Add molecules
      const molecules = 5;
      for (let i = 0; i < molecules; i++) {
        const molecule = document.createElement('div');
        molecule.className = 'molecule';
        
        // Random position
        const posX = Math.random() * container.offsetWidth;
        const posY = Math.random() * container.offsetHeight;
        
        // Random delay
        const delay = Math.random() * 10;
        
        molecule.style.left = `${posX}px`;
        molecule.style.top = `${posY}px`;
        molecule.style.animationDelay = `${delay}s`;
        
        // Create SVG for molecule
        const type = Math.floor(Math.random() * 3);
        let svgContent = '';
        
        if (type === 0) {
          // Water molecule
          svgContent = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="20" r="15" fill="#1a5f7a" />
            <circle cx="20" cy="55" r="15" fill="#1a5f7a" />
            <circle cx="60" cy="55" r="15" fill="#1a5f7a" />
            <line x1="40" y1="20" x2="20" y2="55" stroke="#1a5f7a" stroke-width="4" />
            <line x1="40" y1="20" x2="60" y2="55" stroke="#1a5f7a" stroke-width="4" />
          </svg>`;
        } else if (type === 1) {
          // Benzene
          svgContent = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,10 60,25 60,55 40,70 20,55 20,25" fill="none" stroke="#1a5f7a" stroke-width="3" />
            <circle cx="40" cy="40" r="15" fill="none" stroke="#1a5f7a" stroke-width="2" />
          </svg>`;
        } else {
          // CO2
          svgContent = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="40" r="15" fill="#1a5f7a" />
            <circle cx="60" cy="40" r="15" fill="#1a5f7a" />
            <circle cx="40" cy="40" r="10" fill="#57c5b6" />
            <line x1="20" y1="40" x2="60" y2="40" stroke="#1a5f7a" stroke-width="4" />
          </svg>`;
        }
        
        molecule.innerHTML = svgContent;
        container.appendChild(molecule);
      }
    };
    
    createParticles();
    
    return () => {
      const container = document.getElementById('home');
      if (container) {
        const particles = container.querySelectorAll('.particle, .molecule');
        particles.forEach(particle => particle.remove());
      }
    };
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-secondary shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Chemical structure background pattern */}
              <div className="absolute inset-0 bg-primary/5 z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  <pattern id="chemical-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="#1a5f7a" />
                    <circle cx="40" cy="40" r="2" fill="#1a5f7a" />
                    <circle cx="10" cy="40" r="2" fill="#57c5b6" />
                    <circle cx="40" cy="10" r="2" fill="#57c5b6" />
                    <path d="M10 10 L40 40 M10 40 L40 10" stroke="#1a5f7a" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#chemical-grid)" />
                </svg>
              </div>
              
              {/* Photo container */}
              <div className="w-full h-full overflow-hidden z-10 relative">
                <img 
                  src="/PF.jpeg" 
                  alt="Sarthak Navade" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Fancy border effect */}
              <div className="absolute inset-0 border-8 border-white opacity-10"></div>
              
              {/* Corner icons */}
              <div className="absolute top-2 left-2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-md flex items-center justify-center z-20">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
              <div className="absolute top-2 right-2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-md flex items-center justify-center z-20">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <div className="absolute bottom-2 left-2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-md flex items-center justify-center z-20">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 19 21 12 17 5 21 12 2" />
                </svg>
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 bg-white/50 backdrop-blur-sm rounded-md flex items-center justify-center z-20">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1a5f7a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
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
      
      {/* Enhanced chemical-themed animations */}
      {/* Bubbles */}
      <div className="bubble" style={{top: '15%', left: '5%', width: '50px', height: '50px', animationDelay: '0s'}}></div>
      <div className="bubble" style={{top: '25%', left: '80%', width: '70px', height: '70px', animationDelay: '1.5s'}}></div>
      <div className="bubble" style={{top: '60%', left: '85%', width: '40px', height: '40px', animationDelay: '3s'}}></div>
      <div className="bubble" style={{top: '75%', left: '15%', width: '60px', height: '60px', animationDelay: '4.5s'}}></div>
      <div className="bubble" style={{top: '10%', left: '40%', width: '30px', height: '30px', animationDelay: '2s'}}></div>
      <div className="bubble" style={{top: '50%', left: '60%', width: '45px', height: '45px', animationDelay: '5s'}}></div>
      
      {/* Beakers with chemical reactions */}
      <div className="beaker" style={{bottom: '15%', left: '10%', animationDelay: '0s'}}>
        <div className="beaker-bubble" style={{left: '10px', animationDelay: '0.2s'}}></div>
        <div className="beaker-bubble" style={{left: '25px', animationDelay: '1.5s'}}></div>
        <div className="beaker-bubble" style={{left: '40px', animationDelay: '0.7s'}}></div>
      </div>
      
      <div className="beaker" style={{top: '20%', right: '15%', animationDelay: '2s'}}>
        <div className="beaker-bubble" style={{left: '15px', animationDelay: '0.5s'}}></div>
        <div className="beaker-bubble" style={{left: '30px', animationDelay: '1.8s'}}></div>
        <div className="beaker-bubble" style={{left: '35px', animationDelay: '1.2s'}}></div>
      </div>
      
      {/* Chemical reaction animations */}
      <div className="reaction" style={{top: '30%', left: '20%', animationDelay: '0s'}}></div>
      <div className="reaction" style={{bottom: '20%', right: '25%', animationDelay: '4s'}}></div>
      
      {/* Periodic table elements */}
      <div className="element" style={{top: '15%', right: '8%'}}>
        <div className="element-number">6</div>
        <div className="element-symbol">C</div>
        <div className="element-name">Carbon</div>
      </div>
      
      <div className="element" style={{bottom: '10%', left: '20%'}}>
        <div className="element-number">8</div>
        <div className="element-symbol">O</div>
        <div className="element-name">Oxygen</div>
      </div>
      
      {/* Molecular bonds */}
      <div className="bond" style={{top: '40%', right: '30%', transform: 'rotate(45deg)'}}></div>
      <div className="bond" style={{bottom: '35%', left: '35%', transform: 'rotate(-30deg)'}}></div>
    </section>
  );
};

export default HeroSection;

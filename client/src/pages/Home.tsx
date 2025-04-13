import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Add animated scroll effects to sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-up');
      observer.observe(section);
    });
    
    // Create floating chemical formulas in background
    const createFormulas = () => {
      const container = document.body;
      const formulas = [
        'C₂H₅OH', 'NH₃', 'H₂O', 'CH₄', 'H₂SO₄', 'NaCl', 'CO₂', 'C₆H₁₂O₆'
      ];
      
      for (let i = 0; i < 15; i++) {
        const formula = document.createElement('div');
        formula.className = 'absolute text-primary/5 text-xl md:text-3xl font-bold pointer-events-none';
        formula.style.zIndex = '0';
        formula.style.top = `${Math.random() * 100}%`;
        formula.style.left = `${Math.random() * 100}%`;
        formula.style.transform = `rotate(${Math.random() * 360}deg)`;
        formula.style.opacity = '0.05';
        formula.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
        formula.style.animationDelay = `${Math.random() * 5}s`;
        
        formula.textContent = formulas[Math.floor(Math.random() * formulas.length)];
        container.appendChild(formula);
      }
    };
    
    createFormulas();
    
    return () => {
      // Cleanup on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden">
      {/* Chemistry-themed background elements */}
      <div className="bubble" style={{top: '20%', left: '10%', width: '80px', height: '80px', animationDelay: '0s'}}></div>
      <div className="bubble" style={{top: '40%', left: '70%', width: '60px', height: '60px', animationDelay: '1s'}}></div>
      <div className="bubble" style={{top: '70%', left: '30%', width: '100px', height: '100px', animationDelay: '2s'}}></div>
      <div className="bubble" style={{top: '80%', left: '80%', width: '50px', height: '50px', animationDelay: '3s'}}></div>
      <div className="bubble" style={{top: '30%', left: '20%', width: '40px', height: '40px', animationDelay: '4s'}}></div>
      <div className="bubble" style={{top: '60%', left: '60%', width: '70px', height: '70px', animationDelay: '5s'}}></div>
      <div className="bubble" style={{top: '90%', left: '40%', width: '55px', height: '55px', animationDelay: '6s'}}></div>
      <div className="bubble" style={{top: '15%', left: '90%', width: '65px', height: '65px', animationDelay: '7s'}}></div>
      
      {/* Lab equipment silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-5 pointer-events-none hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="#1a5f7a">
          <path d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 V100 H0 Z"></path>
          <path d="M300,40 L320,80 L340,75 L360,85 L380,60 L400,90 L420,75 L440,80 L460,70"></path>
          <path d="M600,30 L620,70 L660,50 L680,90 L720,60 L760,80 L800,50"></path>
          <path d="M900,45 L920,70 L940,60 L960,80 L980,55 L1000,75 L1020,65 L1040,90 L1060,70 L1080,80"></path>
        </svg>
      </div>
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

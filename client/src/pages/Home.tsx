import React from 'react';
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
  return (
    <div className="min-h-screen w-full font-sans">
      {/* Chemistry-themed background elements */}
      <div className="bubble" style={{top: '20%', left: '10%', width: '80px', height: '80px', animationDelay: '0s'}}></div>
      <div className="bubble" style={{top: '40%', left: '70%', width: '60px', height: '60px', animationDelay: '1s'}}></div>
      <div className="bubble" style={{top: '70%', left: '30%', width: '100px', height: '100px', animationDelay: '2s'}}></div>
      <div className="bubble" style={{top: '80%', left: '80%', width: '50px', height: '50px', animationDelay: '3s'}}></div>
      
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

import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and scroll to section
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed w-full bg-white/95 shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-heading font-bold text-primary" onClick={() => handleNavClick('home')}>
            SN<span className="text-accent">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#home" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#about" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
              <li><a href="#skills" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a></li>
              <li><a href="#education" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
              <li><a href="#projects" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
              <li><a href="#interests" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('interests'); }}>Interests</a></li>
              <li><a href="#contact" className="text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark focus:outline-none" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg p-4 z-50 ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-heading font-bold text-primary">SN<span className="text-accent">.</span></span>
          <button 
            className="text-dark focus:outline-none" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <ul className="space-y-4">
          <li><a href="#home" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
          <li><a href="#about" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
          <li><a href="#skills" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a></li>
          <li><a href="#education" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
          <li><a href="#projects" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
          <li><a href="#interests" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('interests'); }}>Interests</a></li>
          <li><a href="#contact" className="block py-2 text-dark hover:text-primary transition-colors font-medium" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;

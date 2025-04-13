const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-heading font-bold">SN<span className="text-accent">.</span></a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Sarthak Navade. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState, useRef, FormEvent } from 'react';
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  isLink?: boolean;
  href?: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const contactInfo: ContactInfo[] = [
    {
      icon: 'envelope',
      title: 'Email',
      value: 'sarthaknavade0@gmail.com',
      isLink: true,
      href: 'mailto:sarthaknavade0@gmail.com'
    },
    {
      icon: 'map-marker-alt',
      title: 'Location',
      value: 'MITAOE, Alandi, Pune, Maharashtra'
    }
  ];
  
  const socialLinks: SocialLink[] = [
    { icon: 'linkedin-in', href: '#' },
    { icon: 'github', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'instagram', href: '#' }
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-heading font-bold mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className={`md:w-1/2 mb-8 md:mb-0 md:pr-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className={`fas fa-${info.icon} text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">{info.title}</h4>
                      {info.isLink ? (
                        <a href={info.href} className="text-primary hover:underline">{info.value}</a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-heading font-semibold mt-8 mb-4 text-primary">Connect With Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

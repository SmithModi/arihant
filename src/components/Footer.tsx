
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronRight, ArrowUp, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/916352711793', '_blank');
  };

  return (
    <footer className="bg-navy text-white relative">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none">
          <path fill="white" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
      
      {/* Scroll to top button */}
      <motion.button 
        onClick={scrollToTop}
        className="absolute -top-5 right-10 bg-burgundy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-burgundy/90 transition-colors"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={18} />
      </motion.button>
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and About */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/657a4e63-b8b2-49ff-891a-6fc0bf7d249a.png" 
                alt="4man Logo" 
                className="h-14 mb-3"
              />
            </Link>
            <p className="text-gray-300 mt-4">
              Premium fabrics and bespoke tailoring services since 1987. Crafting elegance for every occasion.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="bg-white/10 hover:bg-burgundy text-white p-2 rounded-full transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="bg-white/10 hover:bg-burgundy text-white p-2 rounded-full transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" className="bg-white/10 hover:bg-burgundy text-white p-2 rounded-full transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <button 
                onClick={openWhatsApp}
                className="bg-white/10 hover:bg-green-600 text-white p-2 rounded-full transition-colors" 
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-playfair font-semibold border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Wardrobe', 'Gallery', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-burgundy transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-burgundy" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-playfair font-semibold border-b border-white/20 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Premium Fabrics', path: '/wardrobe?category=fabrics' },
                { name: 'Wedding Suites', path: '/wardrobe?category=wedding-suites' },
                { name: 'Formal Attires', path: '/wardrobe?category=formal-attires' },
                { name: 'Uniforms', path: '/wardrobe?category=uniforms' },
                { name: 'Ready to Wear', path: '/wardrobe?category=ready-to-wear' }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item.path} 
                    className="hover:text-burgundy transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-burgundy" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-playfair font-semibold border-b border-white/20 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 shrink-0 text-burgundy" />
                <span>1st Floor, City Center, 105-108, Divanpara Main Rd, opp. old khadpith, Gujari Bazar, Diwanpara, Rajkot, Gujarat 360005</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0 text-burgundy" />
                <a href="tel:+919913323064" className="hover:text-burgundy transition-colors">+91 99133 23064</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0 text-burgundy" />
                <a href="mailto:info@arihant4man.com" className="hover:text-burgundy transition-colors">info@arihant4man.com</a>
              </li>
              <li>
                <button 
                  onClick={openWhatsApp} 
                  className="mt-2 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-all"
                >
                  <MessageSquare size={16} /> Chat on WhatsApp
                </button>
              </li>
            </ul>
            
            {/* Newsletter - Mobile Only */}
            <div className="block md:hidden mt-6">
              <h4 className="font-medium mb-2">Sign up for updates</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-l px-3 py-2 focus:outline-none focus:border-burgundy text-sm flex-1"
                />
                <button className="bg-burgundy text-white px-3 py-2 rounded-r hover:bg-burgundy/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter - Desktop */}
        <motion.div 
          className="hidden md:block mt-12 p-6 bg-white/5 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium mb-1">Sign up for our newsletter</h3>
              <p className="text-sm text-gray-300">Stay updated with our latest collections and offers</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-l px-4 py-2 focus:outline-none focus:border-burgundy text-white flex-1"
              />
              <button className="bg-burgundy text-white px-4 py-2 rounded-r hover:bg-burgundy/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arihant 4Man Fabrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-beige via-ivory to-beige overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 fabric-texture opacity-40"></div>
      <div className="absolute top-20 -right-16 w-64 h-64 rounded-full bg-navy/5 blur-3xl"></div>
      <div className="absolute bottom-20 -left-16 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-1 rounded-full">
                <span className="block w-2 h-2 rounded-full bg-burgundy animate-pulse"></span>
                <span className="uppercase text-sm font-medium tracking-wider">Premium Fabrics</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Craft Your <span className="text-burgundy">Perfect</span> Style
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Tailored excellence, premium fabrics, and personalized service for your wardrobe needs since 1987.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link to="/wardrobe" className="btn-burgundy flex items-center gap-2 group">
                Explore Collection 
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-secondary">Our Story</Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-96 lg:h-full hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-full">
              {/* Main image */}
              <div className="absolute right-0 top-0 w-5/6 h-5/6 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=640&auto=format&fit=crop" 
                  alt="Premium fabric" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute left-0 bottom-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop" 
                  alt="Tailor measuring" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute top-3/4 right-8 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="h-12 w-12 bg-navy rounded-full flex items-center justify-center text-white">
                  <span className="text-xl font-bold">35+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Years of</p>
                  <p className="font-medium text-navy">Excellence</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="none">
          <path fill="white" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;


import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import FeaturedCollections from '../components/FeaturedCollections';
import CompanyHighlights from '../components/CompanyHighlights';

const features = [
  { title: "Premium Materials", description: "Only the finest quality fabrics sourced from trusted suppliers worldwide." },
  { title: "Expert Craftsmanship", description: "Skilled tailors with decades of experience in bespoke tailoring." },
  { title: "Perfect Fit Guarantee", description: "We ensure each garment fits perfectly with multiple fitting sessions." },
  { title: "Timely Delivery", description: "We value your time and ensure punctual delivery of your orders." },
];

const testimonials = [
  {
    name: "Amit Sharma",
    position: "Corporate Executive",
    text: "Arihant 4Man has been my go-to destination for all my formal attire needs. Their attention to detail and quality craftsmanship is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Rajesh Mehta",
    position: "Wedding Planner",
    text: "I've been recommending Arihant 4Man to all my clients for wedding attire. Their collection is exquisite and the service is exceptional.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Priya Kapoor",
    position: "Fashion Designer",
    text: "The quality of fabrics at Arihant 4Man is simply outstanding. As a designer, I appreciate their commitment to excellence.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
  }
];

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* Scroll indicator */}
        <div className="flex justify-center -mt-12 relative z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={30} className="text-burgundy opacity-80" />
          </motion.div>
        </div>
        
        <FeaturedCollections />
        
        {/* About Section with Parallax */}
        <section className="py-24 bg-beige relative overflow-hidden" ref={targetRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-1 rounded-full mb-4">
                  <span className="uppercase text-sm font-medium tracking-wider">Our Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mt-1 mb-6">
                  Crafting Excellence Since <span className="text-burgundy">1987</span>
                </h2>
                
                <p className="text-gray-700 mb-6">
                  For over three decades, Arihant 4Man has been synonymous with premium fabrics and impeccable tailoring. 
                  Our journey began with a simple mission: to provide discerning customers with the finest materials and 
                  craftsmanship for their wardrobe needs.
                </p>
                
                <p className="text-gray-700 mb-8">
                  Today, we continue that tradition with an unwavering commitment to quality, innovation, and customer satisfaction. 
                  From wedding suites to corporate uniforms, we bring the same dedication to every piece we create.
                </p>
                
                <Link to="/about" className="btn-burgundy inline-flex items-center">
                  Learn More About Us <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              
              <div className="order-1 lg:order-2 relative">
                <motion.div 
                  className="relative h-full"
                  style={{ scale, opacity }}
                >
                  {/* Background decorative element */}
                  <div className="absolute -right-10 -top-10 w-64 h-64 bg-navy/5 rounded-full"></div>
                  
                  <div className="aspect-square lg:aspect-[4/5] relative">
                    <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1627301712670-387fa06aeaf7?q=80&w=800&auto=format&fit=crop" 
                        alt="Arihant 4Man Fabrics Store" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
                    </div>
                    
                    {/* Experience badge */}
                    <motion.div 
                      className="absolute -bottom-6 -left-6 w-32 h-32 bg-burgundy shadow-lg rounded-lg flex items-center justify-center z-20"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-white text-center">
                        <div className="text-3xl font-playfair font-bold">35+</div>
                        <div className="text-sm">Years of Excellence</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-1 rounded-full mb-4">
                <span className="uppercase text-sm font-medium tracking-wider">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
                Experience Excellence in Every Detail
              </h2>
              <p className="text-gray-600">
                We pride ourselves on delivering exceptional quality, service, and value to our customers.
                Here's what sets us apart.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="h-12 w-12 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} className="text-burgundy" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <CompanyHighlights />
        
        {/* Testimonials */}
        <section className="py-24 bg-beige">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-1 rounded-full mb-4">
                <span className="uppercase text-sm font-medium tracking-wider">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600">
                Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Arihant 4Man.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Preview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-1 rounded-full mb-4">
                <span className="uppercase text-sm font-medium tracking-wider">Our Showcase</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
                Gallery
              </h2>
              <p className="text-gray-600">
                Explore our curated collection of custom designs, premium fabrics, and satisfied customers.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&w=400&auto=format&fit=crop"
              ].map((image, index) => (
                <motion.div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={image} 
                    alt={`Gallery Preview ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/gallery" className="btn-navy inline-flex items-center">
                View Full Gallery <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 fabric-texture"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-burgundy opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-burgundy opacity-10 blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Elevate Your Wardrobe?
              </h2>
              <p className="max-w-xl mx-auto text-white/80 mb-8">
                Visit our store for personalized service or contact us for inquiries about our premium fabrics and tailoring services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-burgundy">
                  Contact Us
                </Link>
                <Link to="/wardrobe" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded transition-all duration-300 hover:shadow-md">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;


import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import CompanyHighlights from '../components/CompanyHighlights';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-burgundy font-medium">OUR STORY</span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mt-1 mb-4">
                  Crafting Excellence Since 1987
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
                <Link to="/about" className="btn-secondary inline-flex items-center">
                  Learn More About Us <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1627301712670-387fa06aeaf7?q=80&w=800&auto=format&fit=crop" 
                    alt="Arihant 4Man Fabrics Store" 
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-burgundy rounded-md flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-playfair font-bold">35+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CompanyHighlights />
        
        {/* Gallery Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-burgundy font-medium">OUR SHOWCASE</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mt-1 mb-4">
                Gallery
              </h2>
              <p className="text-gray-700">
                Explore our curated collection of custom designs, premium fabrics, and satisfied customers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery Preview 1" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery Preview 2" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery Preview 3" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?q=80&w=400&auto=format&fit=crop" 
                  alt="Gallery Preview 4" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/gallery" className="btn-primary inline-flex items-center">
                View Full Gallery <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Elevate Your Wardrobe?
            </h2>
            <p className="max-w-xl mx-auto text-white/80 mb-8">
              Visit our store for personalized service or contact us for inquiries about our premium fabrics and tailoring services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Contact Us
              </Link>
              <Link to="/wardrobe" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-sm font-medium transition-colors">
                Explore Collection
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

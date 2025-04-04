
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-beige fabric-texture py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-beige/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                About Arihant 4Man
              </h1>
              <p className="text-lg text-gray-700">
                Our journey of crafting excellence and delivering premium fabrics since 1987.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=800&auto=format&fit=crop" 
                    alt="Arihant 4Man Founders" 
                    className="w-full h-full object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
              <div>
                <span className="text-burgundy font-medium">OUR STORY</span>
                <h2 className="text-3xl font-playfair font-bold text-navy mt-1 mb-4">
                  A Legacy of Excellence
                </h2>
                <p className="text-gray-700 mb-4">
                  Founded in 1987, Arihant 4Man began as a small fabric store with a big vision: to provide customers 
                  with the finest quality fabrics and tailoring services. The name "4Man" represents our commitment to 
                  serving men of all ages and preferences with premium wardrobe solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the decades, we've grown from a modest establishment to a renowned name in premium fabrics and 
                  tailoring. Our dedication to quality has remained unwavering, as we continue to source exceptional 
                  materials from across the globe and employ skilled artisans who transform them into exquisite garments.
                </p>
                <p className="text-gray-700">
                  Today, Arihant 4Man stands as a testament to our founders' vision, serving generations of customers 
                  who value quality, craftsmanship, and personalized service. We pride ourselves on maintaining the 
                  traditions that built our reputation while embracing innovations that enhance our offerings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To provide exceptional fabrics and tailoring services that exceed customer expectations, 
                  helping individuals express their personal style with confidence and distinction.
                </p>
                <p className="text-gray-700">
                  We believe in the transformative power of well-crafted clothing and are committed to making 
                  premium quality accessible to our discerning clientele.
                </p>
              </div>
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To be recognized as the premier destination for superior fabrics and bespoke tailoring 
                  solutions, setting industry standards for quality, creativity, and customer satisfaction.
                </p>
                <p className="text-gray-700">
                  We aspire to preserve traditional craftsmanship while embracing innovation, ensuring that 
                  the Arihant 4Man legacy continues to thrive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-burgundy font-medium">OUR PEOPLE</span>
              <h2 className="text-3xl font-playfair font-bold text-navy mt-1 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-700">
                The passionate individuals behind Arihant 4Man, dedicated to delivering excellence in every thread.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-square relative mb-4 mx-auto max-w-[280px]">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                    alt="Rajesh Arihant" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-navy">Rajesh Arihant</h3>
                <p className="text-burgundy">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 mx-auto max-w-[280px]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                    alt="Amit Arihant" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-navy">Amit Arihant</h3>
                <p className="text-burgundy">Creative Director</p>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 mx-auto max-w-[280px]">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" 
                    alt="Sunil Mehta" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-navy">Sunil Mehta</h3>
                <p className="text-burgundy">Master Tailor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 md:py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              Experience the Arihant 4Man Difference
            </h2>
            <p className="max-w-xl mx-auto text-white/80 mb-8">
              Visit our store to explore our premium fabric collection or schedule a consultation for your custom tailoring needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                Contact Us
              </Link>
              <Link to="/wardrobe" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-sm font-medium transition-colors flex items-center">
                Explore Our Collection <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

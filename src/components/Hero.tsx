
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-beige fabric-texture">
      <div className="absolute inset-0 bg-gradient-to-r from-beige/90 to-beige/40 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-lg space-y-6">
          <span className="inline-block text-burgundy font-medium border-b border-burgundy pb-1">PREMIUM FABRICS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-navy leading-tight">
            Craft Your <br/> Perfect Style
          </h1>
          <p className="text-lg text-gray-700">
            Tailored excellence, premium fabrics, and personalized service for your wardrobe needs since 1987.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/wardrobe" className="btn-primary flex items-center gap-2 group">
              Explore Collection 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="btn-secondary">Our Story</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

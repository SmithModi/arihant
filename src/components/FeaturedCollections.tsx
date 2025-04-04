
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';

const collections = [
  {
    title: "Premium Fabrics",
    description: "Luxurious materials from around the world",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=fabrics"
  },
  {
    title: "Wedding Suites",
    description: "Elegant attire for your special day",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=wedding-suites"
  },
  {
    title: "Formal Attires",
    description: "Sophisticated designs for professional settings",
    image: "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=formal-attires"
  },
  {
    title: "Theme Attires",
    description: "Coordinated looks for special occasions",
    image: "https://images.unsplash.com/photo-1506638794690-fc99115b91dc?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=theme-attires"
  },
  {
    title: "Ready to Wear",
    description: "Instant style for everyday elegance",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=ready-to-wear"
  },
  {
    title: "Uniforms",
    description: "Professional attire for your team",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    link: "/wardrobe?category=uniforms"
  }
];

const FeaturedCollections = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCollections = collections.slice(startIndex, startIndex + 4);

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + 1) % (collections.length - 3)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? collections.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-burgundy font-medium">COLLECTIONS</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mt-1">Featured Categories</h2>
          </div>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {visibleCollections.map((collection, index) => (
            <motion.div
              key={collection.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CategoryCard {...collection} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
          {collections.slice(0, 4).map((collection) => (
            <CategoryCard key={collection.title} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;


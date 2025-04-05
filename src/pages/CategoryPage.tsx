
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { getProductsBySubcategory } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory') || '';
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect(() => {
    if (subcategory) {
      const categoryProducts = getProductsBySubcategory(subcategory);
      setProducts(categoryProducts);
    }
    
    // Scroll to top when page loads or subcategory changes
    window.scrollTo(0, 0);
  }, [subcategory]);
  
  // Capitalize and format subcategory name for display
  const formatSubcategoryName = (name: string) => {
    return name.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Get subcategory description based on its name
  const getSubcategoryDescription = (name: string) => {
    const formattedName = formatSubcategoryName(name);
    
    switch(formattedName) {
      case "Cotton":
        return "Our premium cotton collection offers exceptional comfort and breathability, perfect for both formal and casual wear.";
      case "Linen":
        return "Experience the lightweight luxury of our linen collection, ideal for warm weather and relaxed elegance.";
      case "Iron Free":
        return "Save time without sacrificing style with our innovative iron-free fabrics that stay crisp all day long.";
      case "Khadi":
        return "Embrace traditional craftsmanship with our handwoven khadi collection, celebrating heritage with modern design.";
      case "Raw Silk":
        return "Indulge in the luxurious texture and natural sheen of our raw silk fabrics, perfect for special occasions.";
      case "Jodhpuri":
        return "Make a statement with our elegant Jodhpuri suits, blending royal heritage with contemporary tailoring.";
      case "Sherwani":
        return "Our exquisite Sherwanis feature intricate embroidery and premium fabrics for a truly majestic appearance.";
      case "Indo-Western":
        return "Blend tradition with contemporary style through our innovative Indo-Western ensembles for modern occasions.";
      case "Tuxedo":
        return "Command attention with our sophisticated tuxedos, meticulously crafted for the most formal events.";
      case "Waist Coat":
        return "Add versatility to your wardrobe with our designer waistcoats, perfect as standalone pieces or as part of a three-piece suit.";
      case "Business":
        return "Our corporate business attire combines professional aesthetics with comfortable fabrics for everyday excellence.";
      case "Corporate":
        return "Make your mark in the boardroom with our premium corporate wear, designed for the modern professional.";
      default:
        return `Discover our exclusive range of ${formattedName.toLowerCase()} products, crafted with attention to detail and premium materials.`;
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8">
            <Link to="/wardrobe" className="flex items-center text-navy hover:text-burgundy transition-colors">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to Wardrobe</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-navy">{formatSubcategoryName(subcategory)}</span>
          </div>
          
          {/* Category Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-navy mb-4">
              {formatSubcategoryName(subcategory)} Collection
            </h1>
            <p className="text-gray-700 max-w-3xl">
              {getSubcategoryDescription(subcategory)}
            </p>
          </motion.div>
          
          {/* Products */}
          <ProductGrid products={products} subcategory={formatSubcategoryName(subcategory)} />
          
          {products.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-xl font-medium text-gray-700 mb-4">No products found</h2>
              <Link to="/wardrobe">
                <Button className="bg-navy hover:bg-burgundy transition-colors">
                  Browse All Categories
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;

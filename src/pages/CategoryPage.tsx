
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
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [subcategory]);
  
  // Capitalize and format subcategory name for display
  const formatSubcategoryName = (name: string) => {
    return name.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-playfair font-bold text-navy mb-2">
              {formatSubcategoryName(subcategory)} Collection
            </h1>
            <p className="text-gray-700">
              Discover our exclusive range of {formatSubcategoryName(subcategory.toLowerCase())} products, 
              crafted with attention to detail and premium materials.
            </p>
          </motion.div>
          
          {/* Products */}
          <ProductGrid products={products} category={formatSubcategoryName(subcategory)} />
          
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

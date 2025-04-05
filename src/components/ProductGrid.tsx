
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  category: string;
  fabricType?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  category?: string;
}

const ProductGrid = ({ 
  products, 
  title, 
  showViewAll = false, 
  viewAllLink = "/wardrobe", 
  category 
}: ProductGridProps) => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };
  
  return (
    <div className="w-full">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-playfair font-bold text-navy">{title}</h2>
          {showViewAll && (
            <Link to={viewAllLink} className="text-burgundy hover:underline">
              View All
            </Link>
          )}
        </div>
      )}
      
      {products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No products found {category ? `in ${category}` : ''}.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                rating={product.rating}
                discount={product.discount}
                category={product.category}
                index={index}
              />
            ))}
          </div>
          
          {visibleProducts < products.length && (
            <div className="mt-10 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={loadMore} 
                  className="bg-navy hover:bg-burgundy transition-colors"
                >
                  Load More
                </Button>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;

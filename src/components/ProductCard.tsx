
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  category: string;
  index?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  rating, 
  discount, 
  category,
  index = 0 
}: ProductCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(id);

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image
    });
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        name,
        price,
        image
      });
    }
  };

  const originalPrice = discount ? price / (1 - discount / 100) : price;

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Product Image with Link to Detail Page */}
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Discount Tag */}
          {discount && discount > 0 && (
            <div className="absolute top-2 left-2 bg-burgundy text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </div>
          )}
          
          {/* Quick Actions */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm flex items-center justify-between"
            initial={{ y: '100%' }}
            animate={{ y: isHovering ? 0 : '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.button
              className="p-2 rounded-full bg-navy text-white hover:bg-burgundy transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <ShoppingCart size={16} />
            </motion.button>
            
            <Link to={`/product/${id}`} onClick={(e) => e.stopPropagation()} className="p-2 rounded-full bg-navy text-white hover:bg-burgundy transition-colors">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Eye size={16} />
              </motion.div>
            </Link>
            
            <motion.button
              className={`p-2 rounded-full ${inWishlist ? 'bg-burgundy' : 'bg-navy'} text-white hover:bg-burgundy transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleToggleWishlist(e)}
            >
              <Heart size={16} fill={inWishlist ? "white" : "none"} />
            </motion.button>
          </motion.div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-navy hover:text-burgundy line-clamp-1 transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < rating ? "fill-gold text-gold" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
        </div>
        
        <div className="mt-2 flex items-baseline">
          <span className="text-burgundy font-semibold">{formatPrice(price)}</span>
          {discount && discount > 0 && (
            <span className="ml-2 text-gray-400 text-sm line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        
        <div className="mt-1 text-xs text-gray-500">{category}</div>
      </div>
      
      <motion.button
        className="w-full py-2 bg-navy text-white hover:bg-burgundy transition-colors text-sm font-medium"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        onClick={() => handleAddToCart()}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;

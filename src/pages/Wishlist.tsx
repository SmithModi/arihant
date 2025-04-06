
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash, ArrowRight } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';

const Wishlist = () => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Short timeout to ensure wishlist is loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (item: any) => {
    addToCart({
      ...item,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-burgundy"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-playfair font-bold text-navy">My Wishlist</h1>
              {items.length > 0 && (
                <Button
                  variant="outline"
                  onClick={clearWishlist}
                  className="border-burgundy text-burgundy hover:bg-burgundy/5"
                >
                  Clear Wishlist
                </Button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Heart size={32} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-medium text-gray-700 mb-2">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Add items you love to your wishlist. Review them anytime and easily move them to the cart.
                </p>
                <Link to="/wardrobe">
                  <Button className="bg-navy hover:bg-burgundy transition-colors">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Link to={`/product/${item.id}`} className="block relative aspect-square bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      
                      <div className="p-4">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-medium text-navy hover:text-burgundy transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                        </Link>
                        
                        <div className="mt-2 flex items-baseline">
                          <span className="text-burgundy font-semibold">{formatPrice(item.price)}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(item)}
                            className="bg-navy hover:bg-burgundy text-sm py-1 h-9 transition-colors"
                          >
                            <ShoppingCart size={16} className="mr-1" />
                            Add to Cart
                          </Button>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-500 hover:text-burgundy transition-colors"
                            aria-label="Remove from wishlist"
                          >
                            <Trash size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;

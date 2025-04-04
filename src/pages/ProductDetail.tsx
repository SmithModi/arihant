
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, ShoppingCart, Check, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface ProductDetailProps {}

// Mock product data - in a real app, this would come from an API or database
const products = [
  {
    id: "1",
    name: "Premium Cotton Shirt",
    description: "Our premium cotton shirt is crafted from the finest Egyptian cotton, offering exceptional comfort and breathability. Perfect for formal occasions or business meetings, this shirt features a tailored fit and elegant design that never goes out of style.",
    price: 2499,
    category: "Fabrics",
    subcategory: "Cotton",
    fabricType: "Egyptian Cotton",
    rating: 4.8,
    reviews: 24,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["White", "Sky Blue", "Light Pink"],
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "2",
    name: "Classic Linen Suit",
    description: "Experience the ultimate comfort with our classic linen suit, designed for those warm summer events. The breathable fabric keeps you cool while the impeccable tailoring ensures you look sharp. This versatile suit transitions seamlessly from day to evening events.",
    price: 11999,
    category: "Wedding Suites",
    subcategory: "Jodhpuri",
    fabricType: "Premium Linen",
    rating: 4.9,
    reviews: 18,
    availableSizes: ["38", "40", "42", "44"],
    colors: ["Beige", "Light Gray", "Navy"],
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "3",
    name: "Royal Sherwani",
    description: "Make a statement at your wedding with our Royal Sherwani. Handcrafted with intricate embroidery and premium fabrics, this traditional attire exudes elegance and sophistication. The perfect blend of classic design and modern tailoring ensures you stand out on your special day.",
    price: 24999,
    category: "Wedding Suites",
    subcategory: "Sherwani",
    fabricType: "Raw Silk",
    rating: 5.0,
    reviews: 32,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Royal Blue", "Maroon", "Gold"],
    image: "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  }
];

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Find product by ID
  const product = products.find(p => p.id === productId);
  
  // Handle back button click
  const handleBack = () => {
    navigate(-1);
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select size and color before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price * (1 - (product.discount || 0) / 100),
      quantity: quantity,
      image: product.image
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  // Handle wishlist toggle
  const handleToggleWishlist = () => {
    if (!product) return;
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price * (1 - (product.discount || 0) / 100),
        image: product.image
      });
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };
  
  // Handle quantity change
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  // If product not found
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-navy mb-4">Product Not Found</h2>
              <p className="text-gray-700 mb-6">The product you are looking for does not exist or has been removed.</p>
              <Button onClick={handleBack} className="bg-navy hover:bg-burgundy">
                Go Back
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const originalPrice = product.discount ? product.price / (1 - product.discount / 100) : product.price;
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb navigation */}
          <div className="flex items-center space-x-2 mb-6">
            <motion.button
              onClick={handleBack}
              className="flex items-center text-navy hover:text-burgundy transition-colors"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} className="mr-1" />
              <span>Back</span>
            </motion.button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{product.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{product.subcategory}</span>
            <span className="text-gray-400">/</span>
            <span className="text-navy">{product.name}</span>
          </div>
          
          {/* Product details section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product images */}
            <div className="space-y-4">
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={product.gallery[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`w-20 h-20 rounded-md overflow-hidden ${idx === activeImage ? 'ring-2 ring-burgundy' : 'ring-1 ring-gray-200'}`}
                    onClick={() => setActiveImage(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover object-center" />
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Product info and actions */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-playfair font-bold text-navy">{product.name}</h1>
                
                <div className="flex items-center mt-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-gray-300"} 
                      />
                    ))}
                    {product.rating % 1 !== 0 && (
                      <span className="text-xs text-gold ml-1">+{(product.rating % 1).toFixed(1).substring(2)}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-end mb-6">
                  <span className="text-2xl font-bold text-burgundy">
                    {formatPrice(product.price * (1 - (product.discount || 0) / 100))}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span className="text-gray-400 text-lg line-through ml-3">
                        {formatPrice(originalPrice)}
                      </span>
                      <span className="ml-2 text-sm bg-burgundy/10 text-burgundy px-2 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    </>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-gray-700 font-medium mb-2">Fabric Type</span>
                    <div className="inline-block bg-beige/50 px-3 py-1 rounded text-navy">{product.fabricType}</div>
                  </div>
                  
                  <div>
                    <span className="block text-gray-700 font-medium mb-2">Size</span>
                    <div className="flex flex-wrap gap-2">
                      {product.availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`h-10 min-w-10 px-3 border rounded-md flex items-center justify-center transition-all ${
                            selectedSize === size 
                              ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                              : 'border-gray-300 hover:border-navy'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="block text-gray-700 font-medium mb-2">Color</span>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`group relative h-8 px-3 border rounded-md flex items-center justify-center transition-all ${
                            selectedColor === color 
                              ? 'border-burgundy bg-burgundy/5 text-burgundy' 
                              : 'border-gray-300 hover:border-navy'
                          }`}
                        >
                          {color}
                          {selectedColor === color && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -right-1 -top-1 w-4 h-4 bg-burgundy rounded-full flex items-center justify-center"
                            >
                              <Check size={10} className="text-white" />
                            </motion.span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="block text-gray-700 font-medium mb-2">Quantity</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                        className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="w-12 h-10 border-y border-gray-300 flex items-center justify-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-8 space-x-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-grow bg-navy hover:bg-burgundy transition-colors flex items-center justify-center space-x-2"
                    size="lg"
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </Button>
                  
                  <Button
                    onClick={handleToggleWishlist}
                    variant={isInWishlist(product.id) ? "destructive" : "outline"}
                    size="icon"
                    className={`h-12 w-12 ${
                      isInWishlist(product.id) 
                        ? 'bg-burgundy hover:bg-burgundy/90 text-white' 
                        : 'border-navy text-navy hover:text-burgundy hover:border-burgundy'
                    }`}
                  >
                    <Heart fill={isInWishlist(product.id) ? "currentColor" : "none"} size={20} />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 border-navy text-navy hover:text-burgundy hover:border-burgundy"
                  >
                    <Share2 size={20} />
                  </Button>
                </div>
              </motion.div>
              
              <div className="border-t pt-6 mt-8">
                <h3 className="font-playfair font-semibold text-navy text-lg mb-3">Product Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;

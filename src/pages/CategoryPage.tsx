
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
        return "Our premium cotton collection offers exceptional comfort and breathability, perfect for both formal and casual wear. Each piece is crafted from the finest cotton varieties, ensuring lasting quality and a luxurious feel.";
      case "Linen":
        return "Experience the lightweight luxury of our linen collection, ideal for warm weather and relaxed elegance. Our linen fabrics offer natural texture, exceptional breathability, and a sophisticated appearance that improves with wear.";
      case "Iron Free":
        return "Save time without sacrificing style with our innovative iron-free fabrics that stay crisp all day long. These specially treated fabrics resist wrinkles even through long days and travel, maintaining a freshly pressed appearance.";
      case "Khadi":
        return "Embrace traditional craftsmanship with our handwoven khadi collection, celebrating heritage with modern design. Each khadi piece honors the legacy of handspun, handwoven fabric while offering contemporary styling and exceptional comfort.";
      case "Raw Silk":
        return "Indulge in the luxurious texture and natural sheen of our raw silk fabrics, perfect for special occasions. The distinctive irregular texture and rich depth of raw silk create garments with unmatched character and elegance.";
      case "Jodhpuri":
        return "Make a statement with our elegant Jodhpuri suits, blending royal heritage with contemporary tailoring. These sophisticated ensembles feature the distinctive mandarin collar and refined silhouette that embody timeless masculine elegance.";
      case "Sherwani":
        return "Our exquisite Sherwanis feature intricate embroidery and premium fabrics for a truly majestic appearance. Each piece is a masterwork of traditional craftsmanship reimagined for the modern gentleman seeking regal refinement.";
      case "Indo-Western":
        return "Blend tradition with contemporary style through our innovative Indo-Western ensembles for modern occasions. These unique designs bridge cultural heritage with global fashion, creating distinctive looks that honor tradition while embracing modernity.";
      case "Tuxedo":
        return "Command attention with our sophisticated tuxedos, meticulously crafted for the most formal events. Each tuxedo features premium fabrics, expert tailoring, and refined details that create an undeniably elegant silhouette for special occasions.";
      case "Kurta":
        return "Our designer kurta collection combines traditional aesthetics with contemporary styling for the perfect ceremonial wear. From subtle elegance to elaborate designs, each kurta celebrates cultural heritage with premium fabrics and expert craftsmanship.";
      case "Waist Coat":
        return "Add versatility to your wardrobe with our designer waistcoats, perfect as standalone pieces or as part of a three-piece suit. These meticulously tailored garments feature distinctive fabrics and thoughtful details that elevate any ensemble.";
      case "Business":
        return "Our corporate business attire combines professional aesthetics with comfortable fabrics for everyday excellence. Designed for the modern professional, these suits project authority and competence while ensuring comfort throughout demanding workdays.";
      case "Corporate":
        return "Make your mark in the boardroom with our premium corporate wear, designed for the modern professional. These sophisticated ensembles feature superior tailoring and performance fabrics that maintain their crisp appearance from morning meetings to evening events.";
      case "Tycoons":
        return "Our exclusive Tycoon Collection represents the pinnacle of luxury menswear, crafted for those who demand uncompromising quality and distinction. These exceptional suits feature the world's finest fabrics and extraordinary attention to detail.";
      case "Father & Son":
        return "Create precious memories with our coordinated Father & Son collection, designed to celebrate the special bond between generations. These thoughtfully designed matching outfits create perfect harmony while respecting individual proportions and comfort.";
      case "Family":
        return "Our Family Collection offers elegantly coordinated ensembles for creating unforgettable moments together. With complementary designs across all sizes, these outfits create visual harmony while honoring individual preferences and comfort.";
      case "Pre-Wedding":
        return "Capture perfect memories with our Pre-Wedding collection, featuring coordinated outfits designed specifically for engagement photos and celebrations. These complementary ensembles create visual harmony while allowing individual style to shine.";
      case "Couple":
        return "Our Couple's Collection features sophisticated coordinated ensembles that create visual harmony without being identical. These thoughtfully designed outfits complement each other perfectly while honoring individual preferences and style.";
      case "Hotel":
        return "Our Premium Hotel Staff Collection brings sophistication and professionalism to your hospitality operations. These meticulously designed uniforms create a cohesive brand identity while offering comfort and functionality for service excellence.";
      case "Restaurant":
        return "Our Restaurant Staff Collection combines style and functionality for a professional dining service experience. These carefully crafted uniforms project sophistication while providing comfort and durability throughout busy service.";
      case "School":
        return "Our Premium School Uniform Collection offers durable, comfortable attire that promotes institutional identity and student pride. These thoughtfully designed uniforms maintain their appearance through active school days and repeated washing.";
      case "Shirts":
        return "Our premium shirt collection combines exceptional fabrics with expert tailoring for everyday excellence. From business classics to casual staples, each shirt offers superior comfort, thoughtful details, and enduring style.";
      case "T-Shirts":
        return "Experience exceptional comfort with our premium t-shirt collection, crafted from the finest cotton for everyday luxury. These versatile staples offer superior softness, perfect fit, and lasting quality through countless wears and washes.";
      case "Jeans":
        return "Our premium denim collection combines classic styling with modern comfort for everyday versatility. With thoughtful details and superior construction, these jeans offer the perfect balance of structure and flexibility for lasting comfort and style.";
      case "Nightwears":
        return "Experience ultimate relaxation with our premium nightwear collection, designed for restful sleep and comfortable lounging. Each piece features ultra-soft fabrics, thoughtful details, and refined styling for nighttime comfort without sacrificing elegance.";
      case "Shorts":
        return "Our premium shorts collection offers exceptional comfort for warm weather with breathable fabrics and refined styling. Perfect for casual outings and relaxed gatherings, these versatile pieces combine comfort with subtle sophistication.";
      case "Trouser Patterns":
        return "Our professional trouser pattern collection offers expertly drafted designs for creating bespoke garments. These detailed patterns include comprehensive instructions and multiple size options for creating perfectly tailored trousers.";
      case "Shirt Patterns":
        return "Our shirt pattern collection provides expertly drafted designs for creating custom shirts with professional results. These detailed patterns include multiple style options and clear instructions for tailoring projects at any skill level.";
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

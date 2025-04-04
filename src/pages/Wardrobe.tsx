
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Categories data
const categories = [
  {
    id: "fabrics",
    name: "Fabrics",
    subcategories: [
      { name: "Cotton", image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=500&auto=format&fit=crop" },
      { name: "Linen", image: "https://images.unsplash.com/photo-1581513518767-1818a0a90cd5?q=80&w=500&auto=format&fit=crop" },
      { name: "Iron Free", image: "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=500&auto=format&fit=crop" },
      { name: "Khadi", image: "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop" },
      { name: "Raw Silk", image: "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "wedding-suites",
    name: "Wedding Suites",
    subcategories: [
      { name: "Jodhpuri", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=500&auto=format&fit=crop" },
      { name: "Sherwani", image: "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=500&auto=format&fit=crop" },
      { name: "Indo-Western", image: "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop" },
      { name: "Tuxedo", image: "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop" },
      { name: "Kurta", image: "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop" },
      { name: "Waist Coat", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "formal-attires",
    name: "Formal Attires",
    subcategories: [
      { name: "Business", image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop" },
      { name: "Corporate", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop" },
      { name: "Tycoons", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "theme-attires",
    name: "Theme Attires",
    subcategories: [
      { name: "Father & Son", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500&auto=format&fit=crop" },
      { name: "Family", image: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=500&auto=format&fit=crop" },
      { name: "Pre-Wedding", image: "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop" },
      { name: "Couple", image: "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "uniforms",
    name: "Uniforms",
    subcategories: [
      { name: "Hotel", image: "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop" },
      { name: "Corporate", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop" },
      { name: "Restaurant", image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=500&auto=format&fit=crop" },
      { name: "School", image: "https://images.unsplash.com/photo-1630963487854-dad77556dca3?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "ready-to-wear",
    name: "Ready to Wear",
    subcategories: [
      { name: "Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop" },
      { name: "T-Shirts", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop" },
      { name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop" },
      { name: "Nightwears", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop" },
      { name: "Shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop" },
    ]
  },
  {
    id: "patterns",
    name: "Patterns",
    subcategories: [
      { name: "Trouser Patterns", image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop" },
      { name: "Shirt Patterns", image: "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop" },
    ]
  }
];

const Wardrobe = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-navy text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Our Wardrobe Collection
              </h1>
              <p className="text-lg text-white/80">
                Explore our comprehensive range of premium fabrics, bespoke attires, and ready-to-wear collection.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={activeCategory} value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="bg-gray-100 p-1 h-auto flex-wrap">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="py-2 px-4 data-[state=active]:bg-navy data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-navy mb-2">{category.name}</h2>
                    <p className="text-gray-700">
                      {getCategoryDescription(category.id)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category.subcategories.map((subcategory) => (
                      <div 
                        key={subcategory.name} 
                        className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={subcategory.image} 
                            alt={subcategory.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-playfair font-semibold text-navy">{subcategory.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Quality Assurance */}
        <section className="py-16 md:py-20 bg-beige fabric-texture">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-burgundy font-medium">QUALITY ASSURANCE</span>
              <h2 className="text-3xl font-playfair font-bold text-navy mt-1 mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-gray-700 mb-8">
                At Arihant 4Man, we maintain rigorous quality standards at every stage of production. 
                From fabric selection to the final stitch, each piece undergoes multiple quality checks 
                to ensure exceptional craftsmanship and durability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white p-6 rounded-md shadow-sm w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-2">Premium Materials</h3>
                  <p className="text-gray-700">
                    We source only the finest fabrics from trusted suppliers around the world, ensuring superior comfort and durability.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-2">Expert Craftsmanship</h3>
                  <p className="text-gray-700">
                    Our master tailors bring decades of experience, ensuring every stitch meets our exacting standards.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
                  <h3 className="text-xl font-playfair font-semibold text-navy mb-2">Rigorous Testing</h3>
                  <p className="text-gray-700">
                    Each garment undergoes multiple quality checks throughout the production process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Helper function to get category descriptions
function getCategoryDescription(categoryId: string) {
  switch (categoryId) {
    case "fabrics":
      return "Explore our premium collection of fabrics sourced from around the world, including fine cotton, linen, iron-free, khadi, and raw silk varieties.";
    case "wedding-suites":
      return "Make your special day unforgettable with our bespoke wedding attire, from traditional Sherwanis to modern Tuxedos and Indo-Western fusion designs.";
    case "formal-attires":
      return "Command respect with our sophisticated formal wear collection designed for business professionals and corporate environments.";
    case "theme-attires":
      return "Create memorable moments with our coordinated theme attire collections for families, couples, and special occasions.";
    case "uniforms":
      return "Present a professional image with our custom uniform solutions for hotels, restaurants, corporate offices, and educational institutions.";
    case "ready-to-wear":
      return "Enjoy instant style with our ready-to-wear collection featuring quality shirts, t-shirts, jeans, nightwear, and accessories.";
    case "patterns":
      return "Discover our diverse range of shirt and trouser patterns that can be customized to create your unique style statement.";
    default:
      return "";
  }
}

export default Wardrobe;


import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Gallery data
const galleryItems = [
  {
    category: "fabrics",
    title: "Premium Fabrics",
    images: [
      {
        src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=600&auto=format&fit=crop",
        alt: "Cotton Fabric"
      },
      {
        src: "https://images.unsplash.com/photo-1581513518767-1818a0a90cd5?q=80&w=600&auto=format&fit=crop",
        alt: "Linen Fabric"
      },
      {
        src: "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=600&auto=format&fit=crop",
        alt: "Iron Free Fabric"
      },
      {
        src: "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=600&auto=format&fit=crop",
        alt: "Khadi Fabric"
      },
      {
        src: "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=600&auto=format&fit=crop",
        alt: "Raw Silk Fabric"
      },
      {
        src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
        alt: "Premium Cotton"
      },
    ]
  },
  {
    category: "wedding",
    title: "Wedding Collection",
    images: [
      {
        src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
        alt: "Wedding Suit"
      },
      {
        src: "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=600&auto=format&fit=crop",
        alt: "Sherwani"
      },
      {
        src: "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=600&auto=format&fit=crop",
        alt: "Indo-Western"
      },
      {
        src: "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=600&auto=format&fit=crop",
        alt: "Tuxedo"
      },
      {
        src: "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=600&auto=format&fit=crop",
        alt: "Kurta"
      },
    ]
  },
  {
    category: "formal",
    title: "Formal Wear",
    images: [
      {
        src: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=600&auto=format&fit=crop",
        alt: "Business Formal"
      },
      {
        src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=600&auto=format&fit=crop",
        alt: "Corporate Suit"
      },
      {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
        alt: "Executive Suit"
      },
      {
        src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
        alt: "Formal Shirt"
      },
    ]
  },
  {
    category: "store",
    title: "Our Store",
    images: [
      {
        src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
        alt: "Store Interior"
      },
      {
        src: "https://images.unsplash.com/photo-1581967501270-3a2c568e6380?q=80&w=600&auto=format&fit=crop",
        alt: "Fabric Display"
      },
      {
        src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=600&auto=format&fit=crop",
        alt: "Tailoring Area"
      },
      {
        src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=600&auto=format&fit=crop",
        alt: "Store Front"
      },
    ]
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const filteredGallery = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-beige fabric-texture py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-beige/50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
              Gallery
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our showcase of premium fabrics, bespoke attire, and our elegant store.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-gray-100 p-1">
                  <TabsTrigger 
                    value="all"
                    className="py-2 px-4 data-[state=active]:bg-navy data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                  {galleryItems.map((item) => (
                    <TabsTrigger 
                      key={item.category} 
                      value={item.category}
                      className="py-2 px-4 data-[state=active]:bg-navy data-[state=active]:text-white"
                    >
                      {item.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="space-y-16">
                  {galleryItems.map((category) => (
                    <div key={category.category}>
                      <h2 className="text-2xl font-playfair font-bold text-navy mb-6">{category.title}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {category.images.map((image, index) => (
                          <div 
                            key={index}
                            onClick={() => handleImageClick(image.src)}
                            className="cursor-pointer overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="aspect-square">
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {galleryItems.map((category) => (
                <TabsContent key={category.category} value={category.category} className="mt-0">
                  <h2 className="text-2xl font-playfair font-bold text-navy mb-6">{category.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {category.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => handleImageClick(image.src)}
                        className="cursor-pointer overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="aspect-square">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Gallery;

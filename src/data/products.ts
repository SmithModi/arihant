
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  fabricType: string;
  rating: number;
  reviews: number;
  availableSizes: string[];
  colors: string[];
  image: string;
  gallery: string[];
  inStock: boolean;
  discount?: number;
}

// Sample product data
export const products: Product[] = [
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
  },
  {
    id: "4",
    name: "Iron Free Business Shirt",
    description: "Save time without sacrificing style with our iron-free business shirt. Engineered with innovative fabric technology, this shirt remains crisp and wrinkle-free all day, making it perfect for busy professionals. The comfortable fit and elegant design make it a wardrobe essential.",
    price: 2999,
    category: "Fabrics",
    subcategory: "Iron Free",
    fabricType: "Non-Iron Cotton",
    rating: 4.7,
    reviews: 42,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["White", "Blue", "Gray", "Black"],
    image: "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "5",
    name: "Handwoven Khadi Kurta",
    description: "Embrace traditional craftsmanship with our handwoven Khadi kurta. Made from hand-spun cotton, each piece is unique and tells a story of artisan skill. The breathable fabric ensures comfort in all seasons, while the timeless design makes it perfect for both casual and festive occasions.",
    price: 1999,
    category: "Fabrics",
    subcategory: "Khadi",
    fabricType: "Handspun Khadi Cotton",
    rating: 4.9,
    reviews: 15,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Natural", "Off-White", "Beige", "Light Blue"],
    image: "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "6",
    name: "Raw Silk Indo-Western",
    description: "Blend tradition with contemporary style in our Raw Silk Indo-Western outfit. Featuring luxurious raw silk fabric with intricate detailing, this ensemble offers the perfect balance of ethnic charm and modern aesthetics. Ideal for weddings and special celebrations where you want to make a statement.",
    price: 18999,
    category: "Wedding Suites",
    subcategory: "Indo-Western",
    fabricType: "Premium Raw Silk",
    rating: 4.8,
    reviews: 22,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Midnight Blue", "Wine Red", "Royal Purple", "Emerald Green"],
    image: "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 8
  },
  {
    id: "7",
    name: "Premium Linen Kurta",
    description: "Experience the lightweight comfort of our premium linen kurta, perfect for hot summer days and casual events. The natural linen fabric offers exceptional breathability while the contemporary cut ensures a smart, relaxed look. Available in a range of earthy tones to suit every style preference.",
    price: 3499,
    category: "Fabrics",
    subcategory: "Linen",
    fabricType: "Pure Linen",
    rating: 4.6,
    reviews: 28,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Natural", "Sand", "Olive", "Sky Blue"],
    image: "https://images.unsplash.com/photo-1581513518767-1818a0a90cd5?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581513518767-1818a0a90cd5?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "8",
    name: "Luxury Tuxedo",
    description: "Make an impression with our luxury tuxedo, meticulously crafted for the most sophisticated occasions. The premium wool blend fabric and satin lapels exude refinement, while the expert tailoring ensures a perfect fit. This timeless piece will elevate your formal wardrobe for years to come.",
    price: 32999,
    category: "Wedding Suites",
    subcategory: "Tuxedo",
    fabricType: "Premium Wool Blend",
    rating: 5.0,
    reviews: 14,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Black", "Midnight Blue", "Burgundy"],
    image: "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "9",
    name: "Designer Waistcoat",
    description: "Elevate your formal ensemble with our designer waistcoat, featuring premium fabrics and exquisite detailing. Perfect as a standalone piece or as part of a three-piece suit, this versatile waistcoat adds sophistication to any outfit. The adjustable back ensures a perfect fit for all body types.",
    price: 6999,
    category: "Wedding Suites",
    subcategory: "Waist Coat",
    fabricType: "Jacquard Weave",
    rating: 4.8,
    reviews: 19,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Burgundy", "Navy", "Charcoal", "Forest Green"],
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "10",
    name: "Corporate Business Suit",
    description: "Command authority with our corporate business suit, designed for the modern professional. The structured silhouette and premium fabric blend ensure a sharp look that transitions seamlessly from board meetings to business dinners. Subtle details like pick stitching and horn buttons add a touch of luxury.",
    price: 15999,
    category: "Formal Attires",
    subcategory: "Business",
    fabricType: "Super 120s Wool",
    rating: 4.7,
    reviews: 26,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Charcoal Gray", "Navy Blue", "Black"],
    image: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string) => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, category: string, limit: number = 4) => {
  return products
    .filter(product => product.category === category && product.id !== productId)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4) => {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};


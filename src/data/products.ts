
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
  // Fabrics - Cotton
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
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "11",
    name: "Pima Cotton Business Shirt",
    description: "Made from ultra-soft Pima cotton, this business shirt offers superior comfort with its breathable weave and luxurious feel. The crisp finish and wrinkle-resistant fabric make it perfect for long workdays, while the subtle sheen adds a touch of elegance.",
    price: 2899,
    category: "Fabrics",
    subcategory: "Cotton",
    fabricType: "Pima Cotton",
    rating: 4.7,
    reviews: 18,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["White", "Blue", "Lavender"],
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Fabrics - Linen
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
    id: "12",
    name: "Classic Linen Suit",
    description: "Experience the ultimate comfort with our classic linen suit, designed for those warm summer events. The breathable fabric keeps you cool while the impeccable tailoring ensures you look sharp. This versatile suit transitions seamlessly from day to evening events.",
    price: 11999,
    category: "Fabrics",
    subcategory: "Linen",
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

  // Fabrics - Iron Free
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
    id: "13",
    name: "Iron Free Executive Shirt",
    description: "Designed for the modern executive, this iron-free shirt combines sophisticated style with practical convenience. The advanced fabric treatment ensures it stays crisp all day, even through long meetings and travel. The subtle texture adds depth without compromising on professional appearance.",
    price: 3499,
    category: "Fabrics",
    subcategory: "Iron Free",
    fabricType: "Premium Non-Iron Blend",
    rating: 4.9,
    reviews: 27,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["White", "Light Blue", "Ivory", "Charcoal"],
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 8
  },

  // Fabrics - Khadi
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
    id: "14",
    name: "Premium Khadi Suit Set",
    description: "Our premium Khadi suit set celebrates traditional Indian craftsmanship with modern styling. Hand-spun and handwoven, this eco-friendly fabric offers natural texture and exceptional breathability. Perfect for cultural events and celebrations, it combines ethnic heritage with contemporary elegance.",
    price: 6499,
    category: "Fabrics",
    subcategory: "Khadi",
    fabricType: "Handloom Khadi",
    rating: 4.8,
    reviews: 21,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Cream", "Sage Green", "Earth Brown", "Indigo"],
    image: "https://images.unsplash.com/photo-1604487428802-96502fa1e88a?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604487428802-96502fa1e88a?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Fabrics - Raw Silk
  {
    id: "15",
    name: "Classic Raw Silk Jacket",
    description: "Our classic raw silk jacket showcases the natural beauty and texture of raw silk fabric. The subtle irregularities in the weave create a unique character, while the structured tailoring ensures a sophisticated silhouette. Perfect for special occasions, it adds a touch of luxury to any ensemble.",
    price: 12999,
    category: "Fabrics",
    subcategory: "Raw Silk",
    fabricType: "Pure Raw Silk",
    rating: 4.9,
    reviews: 16,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Royal Blue", "Burgundy", "Gold", "Emerald"],
    image: "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
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
    category: "Fabrics",
    subcategory: "Raw Silk",
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

  // Wedding Suites - Jodhpuri
  {
    id: "2",
    name: "Classic Jodhpuri Suit",
    description: "Make a statement with our classic Jodhpuri suit, combining royal heritage with contemporary tailoring. The elegant mandarin collar and subtle embroidery details create a sophisticated look that's perfect for wedding ceremonies and special occasions. The superior fabric ensures both comfort and style.",
    price: 15999,
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
    id: "16",
    name: "Royal Jodhpuri Bandhgala",
    description: "Our Royal Jodhpuri Bandhgala exudes regal elegance with its impeccable tailoring and luxurious fabric. The traditional silhouette is enhanced with subtle modern touches, creating a timeless piece that commands attention at weddings and formal events. The detailed craftsmanship reflects true artisanal expertise.",
    price: 19999,
    category: "Wedding Suites",
    subcategory: "Jodhpuri",
    fabricType: "Silk Blend",
    rating: 5.0,
    reviews: 24,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Royal Blue", "Black", "Maroon", "Gold"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Wedding Suites - Sherwani
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
    id: "17",
    name: "Heritage Embroidered Sherwani",
    description: "Our Heritage Embroidered Sherwani showcases exquisite craftsmanship with its detailed hand embroidery and premium fabric selection. Designed for the modern groom who appreciates tradition, this piece features classic elements reimagined with contemporary sensibilities. Perfect for creating unforgettable wedding memories.",
    price: 32999,
    category: "Wedding Suites",
    subcategory: "Sherwani",
    fabricType: "Banarasi Silk",
    rating: 4.9,
    reviews: 19,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Deep Burgundy", "Emerald Green", "Midnight Blue", "Rich Gold"],
    image: "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Wedding Suites - Indo-Western
  {
    id: "18",
    name: "Contemporary Indo-Western Ensemble",
    description: "Our Contemporary Indo-Western Ensemble blends cultural elements with modern aesthetics for a unique look that stands out at special events. The innovative design combines traditional silhouettes with contemporary cuts and styling, offering versatility for various formal occasions. Expertly crafted for comfort and impact.",
    price: 16999,
    category: "Wedding Suites",
    subcategory: "Indo-Western",
    fabricType: "Premium Polyester Blend",
    rating: 4.7,
    reviews: 22,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Navy Blue", "Wine Red", "Charcoal Grey", "Teal"],
    image: "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596344306405-811283c3fa4b?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "19",
    name: "Fusion Indo-Western Suit",
    description: "Our Fusion Indo-Western Suit creates the perfect balance between traditional heritage and contemporary fashion. The innovative silhouette combines structured Western tailoring with intricate Indian details and embellishments. Ideal for the modern man seeking to make a unique style statement at weddings and celebrations.",
    price: 21999,
    category: "Wedding Suites",
    subcategory: "Indo-Western",
    fabricType: "Jacquard Silk",
    rating: 4.8,
    reviews: 17,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Black", "Royal Blue", "Burgundy", "Gold"],
    image: "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604467708878-3d875d4e938e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Wedding Suites - Tuxedo
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
    id: "20",
    name: "Modern Slim-Fit Tuxedo",
    description: "Our Modern Slim-Fit Tuxedo offers contemporary elegance with a tailored silhouette that accentuates the masculine form. Featuring premium fabrics with a subtle sheen, precise stitching, and modern proportions, this tuxedo is perfect for black-tie events, galas, and formal wedding celebrations.",
    price: 28999,
    category: "Wedding Suites",
    subcategory: "Tuxedo",
    fabricType: "Italian Wool",
    rating: 4.9,
    reviews: 21,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Classic Black", "Midnight Blue", "Charcoal Grey"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Wedding Suites - Kurta
  {
    id: "21",
    name: "Designer Wedding Kurta",
    description: "Our Designer Wedding Kurta combines traditional aesthetics with contemporary styling for the perfect ceremonial look. The rich fabric features subtle texture and sheen, while the detailed embroidery adds a touch of luxury. Paired with matching bottoms, it creates an ensemble that's both culturally significant and fashion-forward.",
    price: 8999,
    category: "Wedding Suites",
    subcategory: "Kurta",
    fabricType: "Silk Cotton Blend",
    rating: 4.8,
    reviews: 26,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Ivory", "Gold", "Maroon", "Royal Blue"],
    image: "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "22",
    name: "Embellished Festive Kurta",
    description: "Our Embellished Festive Kurta features intricate hand-done embroidery and subtle embellishments that catch the light as you move. Perfect for wedding celebrations and special occasions, this kurta combines traditional craftsmanship with contemporary styling. The premium fabric ensures comfort throughout extended wear.",
    price: 7499,
    category: "Wedding Suites",
    subcategory: "Kurta",
    fabricType: "Jacquard Cotton",
    rating: 4.7,
    reviews: 19,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Cream", "Light Gold", "Sage Green", "Powder Blue"],
    image: "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606513542745-97629752a86b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752538331-e2518fbf9bd2?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606752410021-9960e7c60c9b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Wedding Suites - Waist Coat
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
    id: "23",
    name: "Luxury Brocade Waistcoat",
    description: "Our Luxury Brocade Waistcoat features intricate patterns woven with metallic threads for a truly opulent appearance. The rich texture and subtle sheen make it a perfect statement piece for weddings and special occasions. Pair with a simple shirt to let the waistcoat be the focal point of your ensemble.",
    price: 8999,
    category: "Wedding Suites",
    subcategory: "Waist Coat",
    fabricType: "Silk Brocade",
    rating: 4.9,
    reviews: 16,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Gold", "Royal Blue", "Wine", "Emerald"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Formal Attires - Business
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
  },
  {
    id: "24",
    name: "Executive Business Suit",
    description: "Our Executive Business Suit projects confidence and professionalism with its refined tailoring and premium fabric. Designed for the discerning businessman, this suit features a modern cut that balances contemporary style with timeless elegance. Perfect for important meetings, presentations, and business formal events.",
    price: 19999,
    category: "Formal Attires",
    subcategory: "Business",
    fabricType: "Italian Wool",
    rating: 4.9,
    reviews: 18,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Navy Blue", "Charcoal Grey", "Dark Brown"],
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Formal Attires - Corporate
  {
    id: "25",
    name: "Professional Corporate Suit",
    description: "Make your mark in the boardroom with our Professional Corporate Suit, designed for today's ambitious executive. The clean lines and precise tailoring create a commanding presence, while the high-performance fabric ensures comfort during long workdays. Perfect for those who demand both style and functionality.",
    price: 17499,
    category: "Formal Attires",
    subcategory: "Corporate",
    fabricType: "Australian Merino Wool",
    rating: 4.8,
    reviews: 24,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Deep Navy", "Graphite Grey", "Black"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "26",
    name: "Corporate Performance Suit",
    description: "Our Corporate Performance Suit combines sophisticated style with practical innovation. The advanced fabric technology offers stretch, breathability, and wrinkle resistance, making it ideal for the traveling executive. Modern tailoring ensures a contemporary silhouette that maintains a professional appearance throughout the day.",
    price: 16999,
    category: "Formal Attires",
    subcategory: "Corporate",
    fabricType: "Performance Wool Blend",
    rating: 4.7,
    reviews: 19,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Navy", "Dark Grey", "Medium Blue"],
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },

  // Formal Attires - Tycoons
  {
    id: "27",
    name: "Premium Tycoon Collection Suit",
    description: "Our Premium Tycoon Collection Suit is crafted for those who settle for nothing but the best. Made from ultra-fine Super 150s wool, this exceptional suit features hand-finished details, custom Italian horn buttons, and flawless construction. The perfect embodiment of success and discerning taste.",
    price: 49999,
    category: "Formal Attires",
    subcategory: "Tycoons",
    fabricType: "Super 150s Wool",
    rating: 5.0,
    reviews: 12,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["Jet Black", "Midnight Navy", "Charcoal"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "28",
    name: "Signature Tycoon Suit",
    description: "Our Signature Tycoon Suit represents the pinnacle of luxury menswear. Crafted from the world's finest fabrics and tailored with extraordinary attention to detail, this suit features canvassed construction, silk lining, and personalized details. For the man who demands uncompromising quality and distinction.",
    price: 59999,
    category: "Formal Attires",
    subcategory: "Tycoons",
    fabricType: "Loro Piana Wool",
    rating: 5.0,
    reviews: 9,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["Deep Black", "Navy Blue", "Charcoal Grey"],
    image: "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589363460779-68bd53a0a1e8?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Theme Attires - Father & Son
  {
    id: "29",
    name: "Matching Father & Son Formal Set",
    description: "Create precious memories with our Matching Father & Son Formal Set. This thoughtfully designed coordinated outfit features identical styling adapted to both adult and child proportions. Perfect for weddings, family portraits, and special celebrations, these matching ensembles create a lasting bond between generations.",
    price: 18999,
    category: "Theme Attires",
    subcategory: "Father & Son",
    fabricType: "Premium Cotton Blend",
    rating: 4.9,
    reviews: 28,
    availableSizes: ["Men: 38-46", "Boys: 2-14 years"],
    colors: ["Navy Blue", "Grey", "White", "Black"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "30",
    name: "Father & Son Wedding Collection",
    description: "Our Father & Son Wedding Collection creates a perfect coordinated look for your special celebration. These complementary outfits feature matching fabrics with age-appropriate styling for both father and son. The premium materials and thoughtful details ensure both comfort and elegance for all-day wear.",
    price: 22999,
    category: "Theme Attires",
    subcategory: "Father & Son",
    fabricType: "Silk Blend",
    rating: 4.8,
    reviews: 15,
    availableSizes: ["Men: 38-46", "Boys: 4-14 years"],
    colors: ["Beige", "Light Blue", "Ivory", "Grey"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Theme Attires - Family
  {
    id: "31",
    name: "Coordinated Family Collection",
    description: "Our Coordinated Family Collection offers elegantly matched outfits for the entire family. With complementary designs, colors, and fabrics, these ensembles create a harmonious look while respecting individual styles. Perfect for special events, celebrations, and professional family portraits.",
    price: 32999,
    category: "Theme Attires",
    subcategory: "Family",
    fabricType: "Premium Cotton & Silk Blend",
    rating: 4.9,
    reviews: 22,
    availableSizes: ["Men: 38-46", "Women: XS-XXL", "Children: 2-14 years"],
    colors: ["Navy & Cream", "Burgundy & Gold", "Forest Green & Ivory"],
    image: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "32",
    name: "Family Festive Collection",
    description: "Celebrate together in style with our Family Festive Collection. These coordinated outfits feature complementary colors and designs for every family member, creating a cohesive yet individualized look. The premium fabrics offer comfort for all-day wear during special occasions and holiday celebrations.",
    price: 28999,
    category: "Theme Attires",
    subcategory: "Family",
    fabricType: "Mixed Premium Fabrics",
    rating: 4.7,
    reviews: 18,
    availableSizes: ["Men: 38-46", "Women: XS-XXL", "Children: 2-14 years"],
    colors: ["Festive Red", "Royal Blue", "Emerald Green", "Gold Accent"],
    image: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602852989904-9a0f4fa9618a?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },

  // Theme Attires - Pre-Wedding
  {
    id: "33",
    name: "Pre-Wedding Photoshoot Collection",
    description: "Our Pre-Wedding Photoshoot Collection offers beautifully coordinated outfits designed to create stunning visual memories. With complementary colors and styles that flatter both partners, these ensembles are perfect for engagement photos, pre-wedding shoots, and other celebration events leading up to your big day.",
    price: 19999,
    category: "Theme Attires",
    subcategory: "Pre-Wedding",
    fabricType: "Premium Mixed Fabrics",
    rating: 4.9,
    reviews: 21,
    availableSizes: ["Men: 38-46", "Women: XS-XXL"],
    colors: ["Pastel Blue & Cream", "Burgundy & Blush", "Navy & Champagne"],
    image: "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525359250297-811c1ec2ee4c?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 8
  },
  {
    id: "34",
    name: "Engagement Ceremony Collection",
    description: "Our Engagement Ceremony Collection features coordinated outfits that perfectly complement each other while allowing individual style to shine through. These premium ensembles blend traditional elements with contemporary design for a look that's both timeless and modern, perfect for your engagement and pre-wedding functions.",
    price: 24999,
    category: "Theme Attires",
    subcategory: "Pre-Wedding",
    fabricType: "Silk & Premium Blends",
    rating: 5.0,
    reviews: 16,
    availableSizes: ["Men: 38-46", "Women: XS-XXL"],
    colors: ["Royal Blue & Gold", "Maroon & Cream", "Emerald & Champagne"],
    image: "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Theme Attires - Couple
  {
    id: "35",
    name: "Couple's Coordinated Collection",
    description: "Our Couple's Coordinated Collection offers sophisticated matching outfits that create a stunning visual harmony without being identical. The complementary designs, colors, and fabrics are thoughtfully selected to flatter both partners while maintaining individual style preferences. Perfect for special occasions and celebrations.",
    price: 17999,
    category: "Theme Attires",
    subcategory: "Couple",
    fabricType: "Premium Mixed Fabrics",
    rating: 4.8,
    reviews: 24,
    availableSizes: ["Men: 38-46", "Women: XS-XXL"],
    colors: ["Navy & Blush", "Burgundy & Gold", "Black & Silver", "Emerald & Cream"],
    image: "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621232082074-1a7919472663?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "36",
    name: "Couple's Festival Collection",
    description: "Our Couple's Festival Collection features elegantly coordinated outfits designed for celebrating special events together. With complementary colors, patterns, and styling elements, these ensembles create a unified look while honoring individual personalities. Perfect for festivals, celebrations, and special date nights.",
    price: 15999,
    category: "Theme Attires",
    subcategory: "Couple",
    fabricType: "Mixed Premium Fabrics",
    rating: 4.7,
    reviews: 19,
    availableSizes: ["Men: 38-46", "Women: XS-XXL"],
    colors: ["Blue & Gold", "Maroon & Cream", "Green & Ivory", "Black & Red"],
    image: "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537962386344-c9e434533a4e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525359250297-811c1ec2ee4c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },

  // Uniforms - Hotel
  {
    id: "37",
    name: "Premium Hotel Staff Collection",
    description: "Our Premium Hotel Staff Collection brings sophistication and professionalism to your hotel operations. These meticulously designed uniforms create a cohesive visual identity while offering comfort for long-hour wear. The premium fabrics resist wrinkles and maintain their crisp appearance throughout busy shifts.",
    price: 8999,
    category: "Uniforms",
    subcategory: "Hotel",
    fabricType: "Performance Polyester Blend",
    rating: 4.8,
    reviews: 15,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Burgundy", "Grey"],
    image: "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 15
  },
  {
    id: "38",
    name: "Luxury Hotel Front Desk Collection",
    description: "Our Luxury Hotel Front Desk Collection creates a sophisticated first impression for your guests. These elegant uniforms project professionalism and attention to detail, with thoughtful design features for comfort during long shifts. Customization options allow for perfect alignment with your property's branding.",
    price: 12999,
    category: "Uniforms",
    subcategory: "Hotel",
    fabricType: "Premium Stretch Blend",
    rating: 4.9,
    reviews: 11,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Navy", "Burgundy"],
    image: "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551952237-954eee0b9746?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Uniforms - Corporate
  {
    id: "39",
    name: "Corporate Identity Collection",
    description: "Our Corporate Identity Collection offers professional uniform solutions that strengthen your brand presence. These carefully designed ensembles promote team cohesion while maintaining individual comfort. The premium fabrics offer durability, ease of maintenance, and professional appearance throughout the workday.",
    price: 9999,
    category: "Uniforms",
    subcategory: "Corporate",
    fabricType: "Performance Cotton Blend",
    rating: 4.8,
    reviews: 23,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    colors: ["Navy", "Black", "Grey", "Custom Brand Colors"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "40",
    name: "Executive Corporate Uniform Set",
    description: "Our Executive Corporate Uniform Set projects professionalism and brand consistency across your organization. These premium uniforms feature subtle branding options and sophisticated designs that align with corporate aesthetics. The comfortable fabrics and thoughtful tailoring ensure team members look and feel their best.",
    price: 14999,
    category: "Uniforms",
    subcategory: "Corporate",
    fabricType: "Premium Wool Blend",
    rating: 4.9,
    reviews: 17,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "Custom"],
    colors: ["Navy Blue", "Charcoal Grey", "Black", "Custom"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Uniforms - Restaurant
  {
    id: "41",
    name: "Restaurant Staff Collection",
    description: "Our Restaurant Staff Collection combines style and functionality for a professional dining service experience. These carefully designed uniforms offer comfort during active shifts while maintaining an elegant appearance. Stain-resistant treatments and durable fabrics ensure longevity and consistent presentation.",
    price: 7999,
    category: "Uniforms",
    subcategory: "Restaurant",
    fabricType: "Stain-Resistant Poly-Cotton",
    rating: 4.7,
    reviews: 19,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Burgundy", "Custom"],
    image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 15
  },
  {
    id: "42",
    name: "Fine Dining Service Collection",
    description: "Our Fine Dining Service Collection elevates your restaurant's presentation with sophisticated uniform designs. These premium ensembles project elegance and attention to detail, complementing your establishment's ambiance. Comfortable yet refined, these uniforms enhance the professional appearance of your service staff.",
    price: 10999,
    category: "Uniforms",
    subcategory: "Restaurant",
    fabricType: "Premium Wrinkle-Resistant Blend",
    rating: 4.9,
    reviews: 14,
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Charcoal", "Custom"],
    image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566096650255-98ba2641071c?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Uniforms - School
  {
    id: "43",
    name: "Premium School Uniform Set",
    description: "Our Premium School Uniform Set offers durable, comfortable attire that promotes school identity and pride. These thoughtfully designed uniforms maintain their appearance through active school days and repeated washing. The quality fabrics and construction stand up to the demands of growing students.",
    price: 5999,
    category: "Uniforms",
    subcategory: "School",
    fabricType: "Durable Poly-Cotton Blend",
    rating: 4.8,
    reviews: 32,
    availableSizes: ["Ages 4-18", "XXS-XXL"],
    colors: ["Navy", "White", "Grey", "Maroon", "Custom"],
    image: "https://images.unsplash.com/photo-1630963487854-dad77556dca3?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1630963487854-dad77556dca3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581512798638-ebd32054b3b9?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 12
  },
  {
    id: "44",
    name: "School Formal Collection",
    description: "Our School Formal Collection brings elegance and tradition to academic settings. These premium uniforms foster school spirit and unity while offering comfortable wear throughout the academic year. Customization options allow for perfect alignment with your institution's history and visual identity.",
    price: 7999,
    category: "Uniforms",
    subcategory: "School",
    fabricType: "Quality Durable Blend",
    rating: 4.7,
    reviews: 27,
    availableSizes: ["Ages 4-18", "XXS-XXL"],
    colors: ["Navy", "White", "Burgundy", "Green", "Custom"],
    image: "https://images.unsplash.com/photo-1630963487854-dad77556dca3?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1630963487854-dad77556dca3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573497161287-81745f4d3f8f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 8
  },

  // Ready to Wear - Shirts
  {
    id: "45",
    name: "Classic Oxford Shirt",
    description: "Our Classic Oxford Shirt combines timeless style with everyday versatility. Made from premium cotton with a traditional Oxford weave, this shirt offers breathability and comfort for all-day wear. The tailored fit and subtle details create a refined look suitable for both business and casual settings.",
    price: 2499,
    category: "Ready to Wear",
    subcategory: "Shirts",
    fabricType: "Oxford Cotton",
    rating: 4.8,
    reviews: 42,
    availableSizes: ["38", "40", "42", "44", "46"],
    colors: ["White", "Light Blue", "Pink", "Sky Blue"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "46",
    name: "Premium Business Shirt",
    description: "Our Premium Business Shirt elevates your professional wardrobe with superior fabric and impeccable tailoring. The wrinkle-resistant finish and subtle sheen create a polished appearance that lasts throughout your workday. The contemporary fit offers comfort without sacrificing sophistication.",
    price: 2999,
    category: "Ready to Wear",
    subcategory: "Shirts",
    fabricType: "Two-Ply Cotton",
    rating: 4.9,
    reviews: 35,
    availableSizes: ["38", "40", "42", "44", "46", "48"],
    colors: ["White", "Light Blue", "Lavender", "Grey"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Ready to Wear - T-Shirts
  {
    id: "47",
    name: "Premium Cotton T-Shirt",
    description: "Our Premium Cotton T-Shirt offers exceptional comfort with its ultra-soft fabric and perfect fit. The high-quality cotton provides breathability while maintaining its shape through repeated washing. This versatile staple piece elevates your casual wardrobe with subtle sophistication and effortless style.",
    price: 1299,
    category: "Ready to Wear",
    subcategory: "T-Shirts",
    fabricType: "Supima Cotton",
    rating: 4.7,
    reviews: 48,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy", "Grey", "Olive"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "48",
    name: "Designer Polo T-Shirt",
    description: "Our Designer Polo T-Shirt combines casual comfort with refined elegance. The premium piqué cotton fabric offers breathability and structure, while the tailored fit and subtle branding create a sophisticated appearance. Perfect for smart-casual settings where style and comfort are equally important.",
    price: 1799,
    category: "Ready to Wear",
    subcategory: "T-Shirts",
    fabricType: "Piqué Cotton",
    rating: 4.8,
    reviews: 37,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "White", "Burgundy", "Forest Green"],
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Ready to Wear - Jeans
  {
    id: "49",
    name: "Premium Denim Jeans",
    description: "Our Premium Denim Jeans combine classic styling with modern comfort. The high-quality denim offers the perfect balance of structure and flexibility, with a subtle stretch for all-day comfort. The timeless design and expert construction ensure these jeans will be a wardrobe staple for years to come.",
    price: 2999,
    category: "Ready to Wear",
    subcategory: "Jeans",
    fabricType: "Stretch Denim",
    rating: 4.7,
    reviews: 53,
    availableSizes: ["30", "32", "34", "36", "38", "40", "42"],
    colors: ["Dark Blue", "Medium Blue", "Black", "Grey"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598522280775-a0f762c6c712?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 10
  },
  {
    id: "50",
    name: "Luxury Comfort Jeans",
    description: "Our Luxury Comfort Jeans redefine denim with their exceptional fit and feel. The innovative fabric technology offers remarkable stretch and recovery while maintaining an authentic denim appearance. The thoughtful design elements and superior craftsmanship create jeans that look as good as they feel.",
    price: 3999,
    category: "Ready to Wear",
    subcategory: "Jeans",
    fabricType: "Premium Comfort Denim",
    rating: 4.9,
    reviews: 41,
    availableSizes: ["30", "32", "34", "36", "38", "40", "42"],
    colors: ["Indigo Blue", "Stone Wash", "Charcoal", "Navy"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598522280775-a0f762c6c712?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Ready to Wear - Nightwears
  {
    id: "51",
    name: "Premium Cotton Pajama Set",
    description: "Our Premium Cotton Pajama Set offers unmatched comfort for restful sleep. Made from the finest cotton with a soft brushed finish, these pajamas provide breathability and temperature regulation throughout the night. The relaxed fit and thoughtful details ensure comfort without compromising on style.",
    price: 2499,
    category: "Ready to Wear",
    subcategory: "Nightwears",
    fabricType: "Brushed Cotton",
    rating: 4.8,
    reviews: 34,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Stripe", "Blue Check", "Grey Solid", "Burgundy"],
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 15
  },
  {
    id: "52",
    name: "Luxury Lounge Set",
    description: "Our Luxury Lounge Set blends sleep comfort with relaxed sophistication. Perfect for both sleeping and lounging, this versatile set features premium fabrics with a subtle stretch for unrestricted movement. The contemporary design and attention to detail elevate your nightwear collection with understated elegance.",
    price: 3499,
    category: "Ready to Wear",
    subcategory: "Nightwears",
    fabricType: "Modal Cotton Blend",
    rating: 4.9,
    reviews: 26,
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Heather Grey", "Deep Green"],
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Ready to Wear - Shorts
  {
    id: "53",
    name: "Casual Cotton Shorts",
    description: "Our Casual Cotton Shorts offer exceptional comfort for warm weather with their breathable fabric and relaxed fit. The premium cotton construction provides durability while maintaining softness against the skin. With thoughtful details and a versatile design, these shorts are perfect for casual outings and relaxed weekends.",
    price: 1799,
    category: "Ready to Wear",
    subcategory: "Shorts",
    fabricType: "Premium Cotton",
    rating: 4.7,
    reviews: 39,
    availableSizes: ["30", "32", "34", "36", "38", "40", "42"],
    colors: ["Khaki", "Navy", "Grey", "Olive"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },
  {
    id: "54",
    name: "Premium Chino Shorts",
    description: "Our Premium Chino Shorts combine casual comfort with refined style. The quality cotton twill provides structure and durability while maintaining comfort throughout the day. With clean lines and subtle details, these versatile shorts transition effortlessly from casual daytime activities to relaxed evening gatherings.",
    price: 2299,
    category: "Ready to Wear",
    subcategory: "Shorts",
    fabricType: "Cotton Twill",
    rating: 4.8,
    reviews: 31,
    availableSizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["Beige", "Navy", "Stone Grey", "Dusty Blue"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598522280775-a0f762c6c712?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },

  // Patterns - Trouser Patterns
  {
    id: "55",
    name: "Classic Trouser Pattern Collection",
    description: "Our Classic Trouser Pattern Collection offers timeless designs for creating bespoke trousers. These professionally drafted patterns include detailed instructions and multiple size options for custom tailoring. Perfect for both beginners and experienced tailors looking to create personalized trouser styles.",
    price: 1299,
    category: "Patterns",
    subcategory: "Trouser Patterns",
    fabricType: "Paper Pattern",
    rating: 4.8,
    reviews: 24,
    availableSizes: ["Standard Sizes 30-44", "Custom Available"],
    colors: ["N/A - Pattern Only"],
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "56",
    name: "Designer Trouser Template Set",
    description: "Our Designer Trouser Template Set features contemporary trouser designs for creating custom-tailored garments. These professional-grade templates include comprehensive instructions, layering options, and detailed measurements. Perfect for tailors and designers seeking to create distinctive, personalized trouser styles.",
    price: 1899,
    category: "Patterns",
    subcategory: "Trouser Patterns",
    fabricType: "Digital & Paper Pattern",
    rating: 4.7,
    reviews: 18,
    availableSizes: ["Standard Sizes 30-44", "Digital Adjustable"],
    colors: ["N/A - Pattern Only"],
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
  },

  // Patterns - Shirt Patterns
  {
    id: "57",
    name: "Professional Shirt Pattern Collection",
    description: "Our Professional Shirt Pattern Collection provides expertly drafted designs for creating custom shirts. These detailed patterns include multiple collar, cuff, and fit options for truly personalized garments. With clear instructions and precision measurements, these patterns are perfect for tailoring projects at any skill level.",
    price: 1499,
    category: "Patterns",
    subcategory: "Shirt Patterns",
    fabricType: "Paper Pattern",
    rating: 4.9,
    reviews: 22,
    availableSizes: ["Standard Sizes 38-46", "Custom Available"],
    colors: ["N/A - Pattern Only"],
    image: "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 0
  },
  {
    id: "58",
    name: "Designer Shirt Template Set",
    description: "Our Designer Shirt Template Set offers premium patterns for creating bespoke shirts with distinctive style elements. These professional-grade templates include variations for different collar styles, cuff designs, and fit preferences. Perfect for tailors and enthusiasts looking to create truly custom shirt designs.",
    price: 1999,
    category: "Patterns",
    subcategory: "Shirt Patterns",
    fabricType: "Digital & Paper Pattern",
    rating: 4.8,
    reviews: 16,
    availableSizes: ["Standard Sizes 38-46", "Digital Adjustable"],
    colors: ["N/A - Pattern Only"],
    image: "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584466769623-4f04cf191da5?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=500&auto=format&fit=crop"
    ],
    inStock: true,
    discount: 5
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

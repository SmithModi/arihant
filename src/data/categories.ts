
export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 'fabrics',
    name: 'Fabrics',
    subcategories: [
      { id: 'cotton', name: 'Cotton' },
      { id: 'silk', name: 'Silk' },
      { id: 'linen', name: 'Linen' },
      { id: 'wool', name: 'Wool' },
      { id: 'synthetic', name: 'Synthetic' }
    ]
  },
  {
    id: 'wedding-suites',
    name: 'Wedding Suites',
    subcategories: [
      { id: 'groom', name: 'Groom' },
      { id: 'groomsmen', name: 'Groomsmen' },
      { id: 'father-of-bride', name: 'Father of Bride' },
      { id: 'accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'formal-attires',
    name: 'Formal Attires',
    subcategories: [
      { id: 'suits', name: 'Suits' },
      { id: 'blazers', name: 'Blazers' },
      { id: 'trousers', name: 'Trousers' },
      { id: 'shirts', name: 'Shirts' },
      { id: 'accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'theme-attires',
    name: 'Theme Attires',
    subcategories: [
      { id: 'family-sets', name: 'Family Sets' },
      { id: 'cultural', name: 'Cultural' },
      { id: 'festival', name: 'Festival' },
      { id: 'seasonal', name: 'Seasonal' }
    ]
  },
  {
    id: 'uniforms',
    name: 'Uniforms',
    subcategories: [
      { id: 'corporate', name: 'Corporate' },
      { id: 'hospitality', name: 'Hospitality' },
      { id: 'school', name: 'School' },
      { id: 'healthcare', name: 'Healthcare' }
    ]
  },
  {
    id: 'ready-to-wear',
    name: 'Ready to Wear',
    subcategories: [
      { id: 'casual-shirts', name: 'Casual Shirts' },
      { id: 'jeans', name: 'Jeans' },
      { id: 't-shirts', name: 'T-Shirts' },
      { id: 'outerwear', name: 'Outerwear' },
      { id: 'accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'patterns',
    name: 'Patterns',
    subcategories: [
      { id: 'shirt-patterns', name: 'Shirt Patterns' },
      { id: 'trouser-patterns', name: 'Trouser Patterns' },
      { id: 'suit-patterns', name: 'Suit Patterns' },
      { id: 'accessory-patterns', name: 'Accessory Patterns' }
    ]
  }
];

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(category => category.name === name);
};

export const getSubcategoryById = (categoryId: string, subcategoryId: string): SubCategory | undefined => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return undefined;
  return category.subcategories.find(sub => sub.id === subcategoryId);
};

export const getAllCategoryNames = (): string[] => {
  return categories.map(category => category.name);
};

export const getSubcategoriesByCategoryName = (categoryName: string): SubCategory[] => {
  const category = categories.find(cat => cat.name === categoryName);
  return category ? category.subcategories : [];
};

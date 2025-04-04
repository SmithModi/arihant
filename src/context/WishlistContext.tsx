
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  itemsCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [initialized, setInitialized] = useState(false);
  
  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage:', error);
      }
    }
    setInitialized(true);
  }, []);
  
  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('wishlist', JSON.stringify(items));
    }
  }, [items, initialized]);

  const addItem = (item: WishlistItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems;
      }
      
      // Add item with animation notification
      toast({
        title: "Added to Wishlist",
        description: `${item.name} has been added to your wishlist`,
      });
      
      return [...prevItems, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: "Removed from Wishlist",
          description: `${itemToRemove.name} has been removed from your wishlist`,
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const isInWishlist = (id: string) => {
    return items.some(item => item.id === id);
  };

  const clearWishlist = () => {
    if (items.length > 0) {
      toast({
        title: "Wishlist Cleared",
        description: "All items have been removed from your wishlist",
      });
    }
    setItems([]);
  };

  const itemsCount = items.length;

  return (
    <WishlistContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      isInWishlist,
      clearWishlist,
      itemsCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

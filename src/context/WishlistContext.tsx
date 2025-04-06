
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

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
  const { user, isAuthenticated } = useAuth();
  
  // Function to get the appropriate wishlist key based on authentication status
  const getWishlistKey = () => {
    return user ? `wishlist_${user.email}` : 'wishlist';
  };
  
  // Load wishlist from localStorage on mount or when user changes
  useEffect(() => {
    const loadWishlist = async () => {
      if (user && isAuthenticated) {
        try {
          // Try to fetch wishlist from Supabase first
          const { data, error } = await supabase
            .from('wishlists')
            .select('items')
            .eq('user_id', user.id)
            .maybeSingle();
          
          if (data && data.items) {
            // Use data from Supabase - safely cast from Json to WishlistItem[]
            setItems((data.items as any) as WishlistItem[]);
          } else {
            // Fallback to localStorage if no data in Supabase
            const wishlistKey = getWishlistKey();
            const savedWishlist = localStorage.getItem(wishlistKey);
            
            if (savedWishlist) {
              const parsedItems = JSON.parse(savedWishlist);
              setItems(parsedItems);
              
              // Save to Supabase for future use
              await supabase.from('wishlists').upsert({
                user_id: user.id,
                items: parsedItems as unknown as Json
              });
            } else {
              setItems([]);
            }
          }
        } catch (error) {
          console.error('Error loading wishlist from Supabase:', error);
          // Fallback to localStorage
          const wishlistKey = getWishlistKey();
          const savedWishlist = localStorage.getItem(wishlistKey);
          
          if (savedWishlist) {
            try {
              setItems(JSON.parse(savedWishlist));
            } catch (e) {
              console.error(`Failed to parse wishlist from localStorage:`, e);
              setItems([]);
            }
          } else {
            setItems([]);
          }
        }
      } else {
        // Not authenticated, use localStorage only
        const wishlistKey = 'wishlist';
        const savedWishlist = localStorage.getItem(wishlistKey);
        
        if (savedWishlist) {
          try {
            setItems(JSON.parse(savedWishlist));
          } catch (e) {
            console.error(`Failed to parse wishlist from localStorage:`, e);
            setItems([]);
          }
        } else {
          setItems([]);
        }
      }
      
      setInitialized(true);
    };
    
    loadWishlist();
  }, [user, isAuthenticated]);
  
  // Save wishlist to localStorage and Supabase whenever it changes
  useEffect(() => {
    if (!initialized) return;
    
    const saveWishlist = async () => {
      const wishlistKey = getWishlistKey();
      localStorage.setItem(wishlistKey, JSON.stringify(items));
      
      // Save to Supabase if authenticated
      if (user && isAuthenticated) {
        try {
          await supabase.from('wishlists').upsert({
            user_id: user.id,
            items: items as unknown as Json
          });
        } catch (error) {
          console.error('Error saving wishlist to Supabase:', error);
        }
      }
      
      // Also update the current wishlist for non-authenticated sessions
      if (!user) {
        localStorage.setItem('wishlist', JSON.stringify(items));
      }
    };
    
    saveWishlist();
  }, [items, initialized, user, isAuthenticated]);

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

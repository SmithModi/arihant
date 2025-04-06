
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemsCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [initialized, setInitialized] = useState(false);
  const { user, isAuthenticated } = useAuth();
  
  // Function to get the appropriate cart key based on authentication status
  const getCartKey = () => {
    return user ? `cart_${user.email}` : 'cart';
  };
  
  // Load cart from localStorage and Supabase on mount or when user changes
  useEffect(() => {
    const loadCart = async () => {
      if (user && isAuthenticated) {
        try {
          // Try to fetch cart from Supabase first
          const { data, error } = await supabase
            .from('carts')
            .select('items')
            .eq('user_id', user.id)
            .maybeSingle();
          
          if (data && data.items) {
            // Use data from Supabase - safely cast from Json to CartItem[]
            setItems((data.items as any) as CartItem[]);
          } else {
            // Fallback to localStorage if no data in Supabase
            const cartKey = getCartKey();
            const savedCart = localStorage.getItem(cartKey);
            
            if (savedCart) {
              const parsedItems = JSON.parse(savedCart);
              setItems(parsedItems);
              
              // Save to Supabase for future use
              await supabase.from('carts').upsert({
                user_id: user.id,
                items: parsedItems as unknown as Json
              });
            } else {
              setItems([]);
            }
          }
        } catch (error) {
          console.error('Error loading cart from Supabase:', error);
          // Fallback to localStorage
          const cartKey = getCartKey();
          const savedCart = localStorage.getItem(cartKey);
          
          if (savedCart) {
            try {
              setItems(JSON.parse(savedCart));
            } catch (e) {
              console.error(`Failed to parse cart from localStorage:`, e);
              setItems([]);
            }
          } else {
            setItems([]);
          }
        }
      } else {
        // Not authenticated, use localStorage only
        const cartKey = 'cart';
        const savedCart = localStorage.getItem(cartKey);
        
        if (savedCart) {
          try {
            setItems(JSON.parse(savedCart));
          } catch (e) {
            console.error(`Failed to parse cart from localStorage:`, e);
            setItems([]);
          }
        } else {
          setItems([]);
        }
      }
      
      setInitialized(true);
    };
    
    loadCart();
  }, [user, isAuthenticated]);
  
  // Save cart to localStorage and Supabase whenever it changes
  useEffect(() => {
    if (!initialized) return;
    
    const saveCart = async () => {
      const cartKey = getCartKey();
      localStorage.setItem(cartKey, JSON.stringify(items));
      
      // Save to Supabase if authenticated
      if (user && isAuthenticated) {
        try {
          await supabase.from('carts').upsert({
            user_id: user.id,
            items: items as unknown as Json
          });
        } catch (error) {
          console.error('Error saving cart to Supabase:', error);
        }
      }
      
      // Also update the current cart for non-authenticated sessions
      if (!user) {
        localStorage.setItem('cart', JSON.stringify(items));
      }
    };
    
    saveCart();
  }, [items, initialized, user, isAuthenticated]);

  const addItem = (item: CartItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Update quantity for existing item
        toast({
          title: "Cart Updated",
          description: `${item.name} quantity updated in your cart`,
        });
        
        return prevItems.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      }
      
      // Add new item with animation notification
      toast({
        title: "Added to Cart",
        description: `${item.name} has been added to your cart`,
      });
      
      return [...prevItems, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: "Removed from Cart",
          description: `${itemToRemove.name} has been removed from your cart`,
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    if (items.length > 0) {
      toast({
        title: "Cart Cleared",
        description: "All items have been removed from your cart",
      });
    }
    setItems([]);
  };

  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      itemsCount,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

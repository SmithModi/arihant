
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

// Define user interface
export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

// Define context interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkUserExists: (email: string) => Promise<boolean>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock database for users (in a real app, this would be a backend service)
interface UserData extends User {
  password: string;
}

// Create default admin account if none exists
const initializeDefaultAdmin = () => {
  const users = localStorage.getItem('users');
  if (!users || JSON.parse(users).length === 0) {
    // Create default admin
    const defaultAdmin: UserData = {
      id: 'admin-' + Date.now().toString(),
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin123',
      isAdmin: true
    };
    
    localStorage.setItem('users', JSON.stringify([defaultAdmin]));
    console.log('Default admin account created:', defaultAdmin.email);
    
    return true;
  }
  return false;
};

// AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  
  // Load user from localStorage on mount and initialize default admin if needed
  useEffect(() => {
    const loadUser = () => {
      // Initialize default admin if no users exist
      initializeDefaultAdmin();
      
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error('Failed to parse user from localStorage:', error);
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
      setInitialized(true);
    };
    
    loadUser();
  }, []);
  
  // Helper function to get users from localStorage
  const getUsers = (): UserData[] => {
    const usersData = localStorage.getItem('users');
    return usersData ? JSON.parse(usersData) : [];
  };
  
  // Helper function to save users to localStorage
  const saveUsers = (users: UserData[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Check if user exists
  const checkUserExists = async (email: string): Promise<boolean> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = getUsers();
    return users.some(u => u.email.toLowerCase() === email.toLowerCase());
  };
  
  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = getUsers();
      const foundUser = users.find(
        u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
      
      if (foundUser) {
        // Create user without password for state
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        
        // Link cart and wishlist data to user
        linkCartAndWishlistToUser(email);
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
        return true;
      } else {
        const userExists = await checkUserExists(email);
        if (userExists) {
          toast({
            title: "Login failed",
            description: "Incorrect password. Please try again.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "User not found",
            description: "No account found with this email. Please sign up first.",
            variant: "destructive",
          });
        }
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const userExists = await checkUserExists(email);
      
      if (userExists) {
        toast({
          title: "Registration failed",
          description: "An account with this email already exists. Please sign in instead.",
          variant: "destructive",
        });
        return false;
      }
      
      // Generate a unique ID
      const id = Date.now().toString();
      
      // Create new user
      const newUser: UserData = {
        id,
        name,
        email,
        password,
        isAdmin: false // Regular users aren't admins by default
      };
      
      // Save to "database"
      const users = getUsers();
      users.push(newUser);
      saveUsers(users);
      
      // Login the user
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      // Initialize user's cart and wishlist
      initializeCartAndWishlist(email);
      
      toast({
        title: "Registration successful",
        description: "Your account has been created!",
      });
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    
    // Clear current cart and wishlist
    localStorage.removeItem('currentCart');
    localStorage.removeItem('currentWishlist');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    // Reload the page to reset all states
    window.location.reload();
  };
  
  // Link cart and wishlist to user
  const linkCartAndWishlistToUser = (email: string) => {
    // Get user-specific cart and wishlist
    const userCartKey = `cart_${email}`;
    const userWishlistKey = `wishlist_${email}`;
    
    // Get current cart/wishlist (from anonymous session)
    const currentCart = localStorage.getItem('cart');
    const currentWishlist = localStorage.getItem('wishlist');
    
    // Get user's saved cart/wishlist
    const savedCart = localStorage.getItem(userCartKey);
    const savedWishlist = localStorage.getItem(userWishlistKey);
    
    // Merge current cart with user's saved cart
    if (currentCart) {
      if (savedCart) {
        // Merge logic: take saved cart and add unique items from current cart
        try {
          const currentCartItems = JSON.parse(currentCart);
          const savedCartItems = JSON.parse(savedCart);
          
          // Find items in current cart that aren't in saved cart
          const uniqueItems = currentCartItems.filter(
            (currentItem: any) => !savedCartItems.some((savedItem: any) => savedItem.id === currentItem.id)
          );
          
          // Merge and save
          const mergedCart = [...savedCartItems, ...uniqueItems];
          localStorage.setItem(userCartKey, JSON.stringify(mergedCart));
          localStorage.setItem('cart', JSON.stringify(mergedCart));
        } catch (error) {
          console.error('Error merging cart data:', error);
        }
      } else {
        // No saved cart, use current cart
        localStorage.setItem(userCartKey, currentCart);
      }
    } else if (savedCart) {
      // No current cart, but has saved cart
      localStorage.setItem('cart', savedCart);
    }
    
    // Merge current wishlist with user's saved wishlist
    if (currentWishlist) {
      if (savedWishlist) {
        // Merge logic: take saved wishlist and add unique items from current wishlist
        try {
          const currentWishlistItems = JSON.parse(currentWishlist);
          const savedWishlistItems = JSON.parse(savedWishlist);
          
          // Find items in current wishlist that aren't in saved wishlist
          const uniqueItems = currentWishlistItems.filter(
            (currentItem: any) => !savedWishlistItems.some((savedItem: any) => savedItem.id === currentItem.id)
          );
          
          // Merge and save
          const mergedWishlist = [...savedWishlistItems, ...uniqueItems];
          localStorage.setItem(userWishlistKey, JSON.stringify(mergedWishlist));
          localStorage.setItem('wishlist', JSON.stringify(mergedWishlist));
        } catch (error) {
          console.error('Error merging wishlist data:', error);
        }
      } else {
        // No saved wishlist, use current wishlist
        localStorage.setItem(userWishlistKey, currentWishlist);
      }
    } else if (savedWishlist) {
      // No current wishlist, but has saved wishlist
      localStorage.setItem('wishlist', savedWishlist);
    }
  };
  
  // Initialize cart and wishlist for new user
  const initializeCartAndWishlist = (email: string) => {
    const userCartKey = `cart_${email}`;
    const userWishlistKey = `wishlist_${email}`;
    
    // Get current cart/wishlist (anonymous session before signup)
    const currentCart = localStorage.getItem('cart');
    const currentWishlist = localStorage.getItem('wishlist');
    
    // Save current cart/wishlist to user-specific keys
    if (currentCart) {
      localStorage.setItem(userCartKey, currentCart);
    } else {
      localStorage.setItem(userCartKey, JSON.stringify([]));
      localStorage.setItem('cart', JSON.stringify([]));
    }
    
    if (currentWishlist) {
      localStorage.setItem(userWishlistKey, currentWishlist);
    } else {
      localStorage.setItem(userWishlistKey, JSON.stringify([]));
      localStorage.setItem('wishlist', JSON.stringify([]));
    }
  };
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading, 
      login, 
      register, 
      logout,
      checkUserExists
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

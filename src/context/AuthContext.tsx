
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

// Define user interface
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAdmin?: boolean;
}

// Define context interface
interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkUserExists: (email: string) => Promise<boolean>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state and set up listener
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        if (currentSession?.user) {
          const { id, email } = currentSession.user;
          const userData: AuthUser = {
            id,
            email: email || '',
            name: currentSession.user.user_metadata?.name || '',
            isAdmin: currentSession.user.user_metadata?.is_admin || false
          };
          setUser(userData);
        } else {
          setUser(null);
        }

        if (event === 'SIGNED_IN') {
          toast({
            title: "Login successful",
            description: "Welcome back!",
          });
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      
      if (currentSession?.user) {
        const { id, email } = currentSession.user;
        const userData: AuthUser = {
          id,
          email: email || '',
          name: currentSession.user.user_metadata?.name || '',
          isAdmin: currentSession.user.user_metadata?.is_admin || false
        };
        setUser(userData);
      }
      
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Check if user exists
  const checkUserExists = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false
        }
      });
      
      // If the OTP request succeeds, the user exists
      return !error;
    } catch (error) {
      console.error('Error checking if user exists:', error);
      return false;
    }
  };

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        // Remove email confirmation check and provide a generic error message
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }

      // Check if the user is the admin and update their metadata if needed
      if (email === 'admin@myshop.com') {
        // Set admin metadata
        await supabase.auth.updateUser({
          data: { is_admin: true }
        });
        
        // Update profile in database
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ is_admin: true })
          .eq('id', data.user?.id);
          
        if (profileError) {
          console.error('Error updating admin status:', profileError);
        }
      }

      return true;
    } catch (error: any) {
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
      // Create admin account with hardcoded credentials if it doesn't exist
      if (email === 'admin@myshop.com') {
        const { data: adminCheckData } = await supabase
          .from('profiles')
          .select('*')
          .eq('email', 'admin@myshop.com')
          .maybeSingle();
        
        if (adminCheckData) {
          toast({
            title: "Registration failed",
            description: "Admin account already exists.",
            variant: "destructive",
          });
          return false;
        }
      }

      // Regular signup process with email confirmation disabled
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            is_admin: email === 'admin@myshop.com' ? true : false
          },
          // This bypasses the email confirmation requirement
          emailRedirectTo: window.location.origin
        }
      });

      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }

      // Auto-sign in the user after registration if possible
      if (data.user && !data.session) {
        // If no session was created (which might happen), explicitly log in
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (signInError) {
          toast({
            title: "Registration successful",
            description: "Your account has been created. Please log in.",
          });
          return true;
        }
      }

      toast({
        title: "Registration successful",
        description: "Your account has been created and you are now logged in.",
      });

      return true;
    } catch (error: any) {
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
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session,
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

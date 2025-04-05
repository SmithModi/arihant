import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, ShoppingBag, Heart, LogOut, Settings, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { itemsCount: cartItemsCount } = useCart();
  const { itemsCount: wishlistItemsCount } = useWishlist();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [isLoading, setIsLoading] = useState(false);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/account' } }} />;
  }
  
  const handleLogout = async () => {
    await logout();
  };
  
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      // Update user metadata in auth
      const { error: updateError } = await supabase.auth.updateUser({
        data: { name }
      });
      
      if (updateError) throw updateError;
      
      // Update the profile in the profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ name })
        .eq('id', user.id);
      
      if (profileError) throw profileError;
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      
      setIsEditing(false);
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-beige fabric-texture py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 sm:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 md:h-20 md:w-20 bg-burgundy/10 rounded-full flex items-center justify-center">
                    <User size={32} className="text-burgundy" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                      {user?.name}
                    </h1>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="mt-4 md:mt-0 border-burgundy text-burgundy hover:bg-burgundy/5"
                  onClick={handleLogout}
                >
                  <LogOut size={18} className="mr-2" />
                  Logout
                </Button>
              </div>
              
              {/* Account Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <motion.div 
                  className="bg-navy/5 p-4 rounded-lg flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShoppingBag size={24} className="text-navy mb-2" />
                  <h3 className="font-medium">Cart Items</h3>
                  <p className="text-xl font-bold text-burgundy">{cartItemsCount}</p>
                  <Link to="/" className="text-xs text-navy hover:underline mt-1">
                    View Cart
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="bg-navy/5 p-4 rounded-lg flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Heart size={24} className="text-navy mb-2" />
                  <h3 className="font-medium">Wishlist</h3>
                  <p className="text-xl font-bold text-burgundy">{wishlistItemsCount}</p>
                  <Link to="/wishlist" className="text-xs text-navy hover:underline mt-1">
                    View Wishlist
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="bg-navy/5 p-4 rounded-lg flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ShoppingBag size={24} className="text-navy mb-2" />
                  <h3 className="font-medium">Orders</h3>
                  <p className="text-xl font-bold text-burgundy">0</p>
                  <Link to="/" className="text-xs text-navy hover:underline mt-1">
                    View Orders
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="bg-navy/5 p-4 rounded-lg flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Settings size={24} className="text-navy mb-2" />
                  <h3 className="font-medium">Settings</h3>
                  <p className="text-xl font-bold text-burgundy"></p>
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-xs text-navy hover:underline mt-1"
                  >
                    Edit Profile
                  </button>
                </motion.div>
              </div>
              
              {/* Profile Information */}
              <div className="mt-8">
                <h2 className="text-xl font-playfair font-semibold text-navy mb-4">
                  Profile Information
                </h2>
                
                {isEditing ? (
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                      />
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        type="submit" 
                        className="bg-burgundy hover:bg-burgundy/90"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            <span>Saving...</span>
                          </div>
                        ) : (
                          'Save Changes'
                        )}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setIsEditing(false);
                          setName(user?.name || '');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Full Name</p>
                        <button 
                          onClick={() => setIsEditing(true)}
                          className="text-navy hover:text-burgundy"
                        >
                          <Edit2 size={16} />
                        </button>
                      </div>
                      <p className="font-medium mt-1">{user?.name}</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium mt-1">{user?.email}</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <p className="text-sm text-gray-500">Account Type</p>
                      <p className="font-medium mt-1">
                        {user?.isAdmin ? 'Administrator' : 'Customer'}
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium mt-1">
                        {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Additional Sections (Address, Payment Methods, etc.) can be added here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;

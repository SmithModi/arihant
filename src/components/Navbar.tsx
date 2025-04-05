
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ShoppingCart, Heart, User, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import CartDrawer from './CartDrawer';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Wardrobe', 
    path: '/wardrobe',
    subItems: [
      { name: 'Fabrics', path: '/wardrobe?category=fabrics' },
      { name: 'Wedding Suites', path: '/wardrobe?category=wedding-suites' },
      { name: 'Formal Attires', path: '/wardrobe?category=formal-attires' },
      { name: 'Theme Attires', path: '/wardrobe?category=theme-attires' },
      { name: 'Uniforms', path: '/wardrobe?category=uniforms' },
      { name: 'Ready to Wear', path: '/wardrobe?category=ready-to-wear' },
      { name: 'Patterns', path: '/wardrobe?category=patterns' },
    ] 
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { itemsCount: cartItemsCount } = useCart();
  const { itemsCount: wishlistItemsCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    setActiveDropdown(null);
    setIsUserMenuOpen(false);
  }, [location]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
      
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node) && isUserMenuOpen) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isUserMenuOpen]);
  
  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/657a4e63-b8b2-49ff-891a-6fc0bf7d249a.png" 
                alt="4man Logo" 
                className="h-11 md:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
              {navItems.map((item) => (
                <motion.div 
                  key={item.name} 
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * navItems.indexOf(item) }}
                >
                  {item.subItems ? (
                    <div className="flex items-center">
                      <button
                        className={`px-2 py-2 rounded-md flex items-center text-gray-700 group-hover:text-burgundy transition-colors ${location.pathname === item.path ? 'text-burgundy' : ''}`}
                        onClick={() => toggleDropdown(item.name)}
                        onMouseEnter={() => !isMobile && setActiveDropdown(item.name)}
                        onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                      >
                        {item.name}
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} className="ml-1" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {(isMobile ? activeDropdown === item.name : true) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute hidden group-hover:block top-full left-0 w-60 bg-white shadow-lg rounded-md overflow-hidden mt-1 z-50"
                            onMouseEnter={() => !isMobile && setActiveDropdown(item.name)}
                            onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                          >
                            {item.subItems.map((subItem, idx) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-burgundy transition-colors flex items-center"
                                >
                                  <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-2 py-2 link-hover ${location.pathname === item.path ? 'text-burgundy' : 'text-gray-700 hover:text-burgundy'} transition-colors`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-1 md:gap-4">
              {isAuthenticated ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="p-2 text-navy hover:text-burgundy transition-colors relative"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <User size={22} />
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                      >
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                        
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-burgundy transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <User size={16} className="mr-2" />
                            Your Account
                          </div>
                        </Link>
                        
                        {user?.isAdmin && (
                          <Link
                            to="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-burgundy transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <User size={16} className="mr-2" />
                              Admin Dashboard
                            </div>
                          </Link>
                        )}
                        
                        <button 
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-burgundy transition-colors"
                        >
                          <div className="flex items-center">
                            <LogOut size={16} className="mr-2" />
                            Logout
                          </div>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Link to="/login" className="p-2 text-navy hover:text-burgundy transition-colors">
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center"
                    >
                      <LogIn size={18} className="mr-1" />
                      <span className="text-sm">Login</span>
                    </motion.div>
                  </Link>
                  <Link to="/register" className="p-2 text-navy hover:text-burgundy transition-colors">
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center"
                    >
                      <UserPlus size={18} className="mr-1" />
                      <span className="text-sm">Register</span>
                    </motion.div>
                  </Link>
                </div>
              )}
              
              <Link to="/wishlist" className="p-2 text-navy hover:text-burgundy transition-colors relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Heart size={22} />
                </motion.div>
                {wishlistItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {wishlistItemsCount}
                  </motion.span>
                )}
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="p-2 text-navy hover:text-burgundy transition-colors relative"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <ShoppingCart size={22} />
                </motion.div>
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:hidden ml-1 text-navy focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white shadow-lg mt-4 rounded-lg"
              >
                <div className="flex flex-col py-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="px-4 py-2">
                      {item.subItems ? (
                        <div>
                          <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleDropdown(item.name)}
                          >
                            <span className="text-navy font-medium">{item.name}</span>
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 ml-4 border-l-2 border-burgundy/30 pl-4"
                              >
                                {item.subItems.map((subItem, idx) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  >
                                    <Link
                                      to={subItem.path}
                                      className="block py-2 text-navy hover:text-burgundy transition-colors"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block py-1 ${location.pathname === item.path ? 'text-burgundy font-medium' : 'text-navy hover:text-burgundy'} transition-colors`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Add mobile auth links */}
                  {!isAuthenticated && (
                    <div className="mt-2 pt-2 border-t border-gray-200 px-4 flex flex-col space-y-2">
                      <Link
                        to="/login"
                        className="flex items-center py-2 text-navy hover:text-burgundy transition-colors"
                      >
                        <LogIn size={18} className="mr-2" />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center py-2 text-navy hover:text-burgundy transition-colors"
                      >
                        <UserPlus size={18} className="mr-2" />
                        Register
                      </Link>
                    </div>
                  )}
                  
                  {isAuthenticated && (
                    <div className="mt-2 pt-2 border-t border-gray-200 px-4 flex flex-col space-y-2">
                      <div className="py-2">
                        <p className="font-medium text-navy">{user?.name}</p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                      </div>
                      <Link
                        to="/account"
                        className="flex items-center py-2 text-navy hover:text-burgundy transition-colors"
                      >
                        <User size={18} className="mr-2" />
                        Your Account
                      </Link>
                      {user?.isAdmin && (
                        <Link
                          to="/admin"
                          className="flex items-center py-2 text-navy hover:text-burgundy transition-colors"
                        >
                          <User size={18} className="mr-2" />
                          Admin Dashboard
                        </Link>
                      )}
                      <button 
                        onClick={handleLogout}
                        className="flex items-center py-2 text-navy hover:text-burgundy transition-colors"
                      >
                        <LogOut size={18} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;

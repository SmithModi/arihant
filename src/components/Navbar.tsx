
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-playfair text-navy">ARIHANT <span className="text-burgundy">4MAN</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <div className="flex items-center cursor-pointer">
                    <span 
                      className="text-navy hover:text-burgundy transition-colors"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                    </span>
                    <ChevronDown size={16} className="ml-1" />
                    
                    <div className="absolute hidden group-hover:block top-full left-0 w-56 bg-white shadow-md rounded-md overflow-hidden mt-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-navy hover:bg-beige/50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-navy hover:text-burgundy transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <div key={item.name} className="px-4 py-2">
                  {item.subItems ? (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span className="text-navy">{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      
                      {activeDropdown === item.name && (
                        <div className="mt-2 ml-4 border-l-2 border-beige pl-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 text-navy hover:text-burgundy transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-navy hover:text-burgundy transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

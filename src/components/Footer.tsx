
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold font-playfair">ARIHANT <span className="text-gold">4MAN</span></span>
            </Link>
            <p className="text-gray-300 mt-2">
              Premium fabrics and bespoke tailoring services since 1987. Crafting elegance for every occasion.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/wardrobe" className="hover:text-gold transition-colors">Wardrobe</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/wardrobe?category=fabrics" className="hover:text-gold transition-colors">Premium Fabrics</Link>
              </li>
              <li>
                <Link to="/wardrobe?category=wedding-suites" className="hover:text-gold transition-colors">Wedding Suites</Link>
              </li>
              <li>
                <Link to="/wardrobe?category=formal-attires" className="hover:text-gold transition-colors">Formal Attires</Link>
              </li>
              <li>
                <Link to="/wardrobe?category=uniforms" className="hover:text-gold transition-colors">Uniforms</Link>
              </li>
              <li>
                <Link to="/wardrobe?category=ready-to-wear" className="hover:text-gold transition-colors">Ready to Wear</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-2 shrink-0" />
                <span>123 Fashion Street, Design District, Mumbai - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 shrink-0" />
                <a href="mailto:info@arihant4man.com" className="hover:text-gold transition-colors">info@arihant4man.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arihant 4Man Fabrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

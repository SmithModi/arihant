
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Package, Users, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onBackToSite: () => void;
  onLogout: () => void;
}

const AdminSidebar = ({ isOpen, onToggle, onBackToSite, onLogout }: AdminSidebarProps) => {
  return (
    <motion.div 
      className="fixed top-0 left-0 h-full bg-navy text-white shadow-lg z-10"
      initial={{ width: isOpen ? 256 : 80 }}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-navy-600 flex items-center justify-between">
          {isOpen && <h2 className="text-xl font-bold">Admin Panel</h2>}
          <Button 
            variant="ghost" 
            className="p-2 text-white hover:bg-navy-700"
            onClick={onToggle}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </Button>
        </div>
        
        {/* Sidebar Menu */}
        <div className="flex-1 py-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-burgundy transition-colors">
                <Package size={20} />
                {isOpen && <span className="ml-4">Products</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-burgundy transition-colors">
                <Users size={20} />
                {isOpen && <span className="ml-4">Customers</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-burgundy transition-colors">
                <Settings size={20} />
                {isOpen && <span className="ml-4">Settings</span>}
              </a>
            </li>
          </ul>
        </div>
        
        {/* Sidebar Footer */}
        <div className="p-4 border-t border-navy-600">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-start px-4 py-3 text-white hover:bg-burgundy transition-colors mb-2"
            onClick={onBackToSite}
          >
            <Home size={20} />
            {isOpen && <span className="ml-4">Back to Site</span>}
          </Button>
          
          <Button
            variant="ghost"
            className="w-full flex items-center justify-start px-4 py-3 text-white hover:bg-burgundy transition-colors"
            onClick={onLogout}
          >
            <LogOut size={20} />
            {isOpen && <span className="ml-4">Logout</span>}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;

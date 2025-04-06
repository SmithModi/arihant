
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthUser } from '@/context/AuthContext';

interface AdminHeaderProps {
  title: string;
  user: AuthUser | null;
  onToggleSidebar: () => void;
}

const AdminHeader = ({ title, user, onToggleSidebar }: AdminHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          className="mr-4 lg:hidden"
          onClick={onToggleSidebar}
        >
          <Menu size={20} />
        </Button>
        <h1 className="text-2xl font-playfair font-bold text-navy">{title}</h1>
      </div>
      
      <div className="flex items-center">
        {user && (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-burgundy text-white flex items-center justify-center mr-3">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-navy">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;

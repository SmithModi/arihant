
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

interface GoogleReviewPopupProps {
  reviewLink: string;
  teamDescription: string;
}

const GoogleReviewPopup: React.FC<GoogleReviewPopupProps> = ({ reviewLink, teamDescription }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  
  useEffect(() => {
    // Show the popup after 3 seconds of page load
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isClosed]);
  
  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };
  
  const handleReviewClick = () => {
    window.open(reviewLink, '_blank');
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 left-4 z-50 max-w-xs"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
              <div className="flex items-center gap-2">
                {/* Google G Logo */}
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <span className="font-medium text-sm text-gray-700">Google Reviews</span>
              </div>
              <button 
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">5.0</span>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{teamDescription}</p>
              
              <button
                onClick={handleReviewClick}
                className="w-full bg-navy hover:bg-navy/90 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>Leave a Review</span>
                <Star size={14} fill="currentColor" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoogleReviewPopup;

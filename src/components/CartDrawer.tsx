
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';
import { formatPrice } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center bg-navy text-white">
              <h2 className="text-xl font-semibold flex items-center">
                <ShoppingBag className="mr-2" size={20} />
                Your Cart
              </h2>
              <button 
                onClick={onClose} 
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <ShoppingBag size={64} className="mb-4 opacity-30" />
                  <p className="text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-sm text-center mb-6">Add items to your cart to see them here</p>
                  <Button onClick={onClose} variant="outline" className="border-navy text-navy hover:bg-navy/5">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex gap-4 border-b pb-4"
                    >
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                        <p className="text-burgundy font-semibold mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center border rounded-l bg-gray-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center border-y">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border rounded-r bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            
            {items.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between font-medium mb-4">
                  <span>Total</span>
                  <span className="text-burgundy">{formatPrice(total)}</span>
                </div>
                <Button className="w-full bg-burgundy hover:bg-burgundy/90">
                  Proceed to Checkout
                </Button>
                <button 
                  onClick={clearCart}
                  className="w-full text-sm text-gray-500 mt-2 py-1 hover:text-gray-800 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

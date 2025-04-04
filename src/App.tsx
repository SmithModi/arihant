
import React from "react"; // Ensure React is explicitly imported
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Wardrobe from "./pages/Wardrobe"; 
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// ScrollToTop component to handle automatic scrolling on page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Wrap TooltipProvider with React.StrictMode to ensure proper React context */}
    <React.StrictMode>
      <TooltipProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/wardrobe" element={<Wardrobe />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </TooltipProvider>
    </React.StrictMode>
  </QueryClientProvider>
);

export default App;

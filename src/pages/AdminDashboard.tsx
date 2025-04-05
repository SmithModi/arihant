
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Trash, Edit, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description?: string;
  image?: string;
  rating?: number;
}

const categories = [
  'All',
  'Fabrics',
  'Wedding Suites',
  'Formal Attires',
  'Theme Attires',
  'Uniforms',
  'Ready to Wear',
  'Patterns',
];

const AdminDashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: 'Fabrics',
    stock: 0,
    description: '',
    image: '',
    rating: 5
  });

  // Fetch products from Supabase
  const fetchProducts = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('products')
        .select('*');
      
      if (error) {
        throw error;
      }
      
      if (data) {
        setProducts(data as Product[]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Failed to load products",
        description: "Please try again later",
        variant: "destructive"
      });
      
      // Set sample products as fallback
      setProducts([
        { id: '1', name: 'Premium Linen Fabric', price: 1500, category: 'Fabrics', stock: 45 },
        { id: '2', name: 'Wedding Sherwani', price: 25000, category: 'Wedding Suites', stock: 12 },
        { id: '3', name: 'Formal Business Suit', price: 12000, category: 'Formal Attires', stock: 20 },
        { id: '4', name: 'Father-Son Combo', price: 15000, category: 'Theme Attires', stock: 8 },
        { id: '5', name: 'Hotel Staff Uniform', price: 3500, category: 'Uniforms', stock: 30 },
        { id: '6', name: 'Cotton Jeans', price: 2000, category: 'Ready to Wear', stock: 50 },
        { id: '7', name: 'Shirt Pattern Template', price: 500, category: 'Patterns', stock: 25 },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        // Check if user is admin by querying the profiles table
        const { data, error } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error checking admin status:', error);
          setIsAdmin(false);
        } else {
          setIsAdmin(data?.is_admin ?? false);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
    fetchProducts();
  }, [user]);

  // Sort and filter products
  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      
      let comparison = 0;
      if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === 'price') {
        comparison = a.price - b.price;
      } else if (sortField === 'category') {
        comparison = a.category.localeCompare(b.category);
      } else if (sortField === 'stock') {
        comparison = a.stock - b.stock;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const renderSortIcon = (field: string) => {
    if (sortField !== field) return null;
    
    return sortDirection === 'asc' ? (
      <ChevronUp size={16} className="ml-1" />
    ) : (
      <ChevronDown size={16} className="ml-1" />
    );
  };

  // Handle adding a new product
  const handleAddProduct = async () => {
    try {
      if (!newProduct.name || !newProduct.price) {
        toast({
          title: "Validation error",
          description: "Name and price are required fields",
          variant: "destructive"
        });
        return;
      }

      const { data, error } = await (supabase as any)
        .from('products')
        .insert({
          name: newProduct.name,
          price: newProduct.price,
          category: newProduct.category,
          stock: newProduct.stock || 0,
          description: newProduct.description,
          image: newProduct.image,
          rating: newProduct.rating
        })
        .select();

      if (error) throw error;

      toast({
        title: "Product added",
        description: "The product has been added successfully"
      });

      // Add the new product to the local state
      if (data && data[0]) {
        setProducts(prev => [...prev, data[0] as Product]);
      }

      // Reset the form and close the modal
      setNewProduct({
        name: '',
        price: 0,
        category: 'Fabrics',
        stock: 0,
        description: '',
        image: '',
        rating: 5
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: "Failed to add product",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Handle updating an existing product
  const handleUpdateProduct = async () => {
    try {
      if (!editingProduct) return;

      const { data, error } = await (supabase as any)
        .from('products')
        .update({
          name: editingProduct.name,
          price: editingProduct.price,
          category: editingProduct.category,
          stock: editingProduct.stock,
          description: editingProduct.description,
          image: editingProduct.image,
          rating: editingProduct.rating
        })
        .eq('id', editingProduct.id)
        .select();

      if (error) throw error;

      toast({
        title: "Product updated",
        description: "The product has been updated successfully"
      });

      // Update the product in the local state
      if (data && data[0]) {
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? (data[0] as Product) : p));
      }

      // Reset and close the modal
      setEditingProduct(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error updating product:', error);
      toast({
        title: "Failed to update product",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Handle deleting a product
  const handleDeleteProduct = async (productId: string) => {
    try {
      if (!confirm("Are you sure you want to delete this product?")) return;

      const { error } = await (supabase as any)
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;

      toast({
        title: "Product deleted",
        description: "The product has been deleted successfully"
      });

      // Remove the product from the local state
      setProducts(prev => prev.filter(p => p.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        title: "Failed to delete product",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
      </div>
    );
  }

  // If not authenticated or not admin, redirect to login
  if (!isLoading && (!isAuthenticated || !isAdmin)) {
    toast({
      title: "Access denied",
      description: "You must be an administrator to access this page.",
      variant: "destructive"
    });
    return <Navigate to="/login" state={{ from: { pathname: '/admin' } }} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"
        >
          <div>
            <h1 className="text-3xl font-playfair font-bold text-navy">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your products and inventory</p>
          </div>
          <Button 
            className="bg-burgundy hover:bg-burgundy/90 flex items-center"
            onClick={() => {
              setShowModal(true);
              setEditingProduct(null);
            }}
          >
            <Plus size={16} className="mr-1" /> Add New Product
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold text-navy">{products.length}</h3>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Stock</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold text-navy">
                  {products.reduce((total, product) => total + product.stock, 0)}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold text-navy">
                  {formatPrice(products.reduce((total, product) => total + (product.price * product.stock), 0))}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-64">
              <Search size={18} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-navy"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead 
                    className="cursor-pointer hover:text-navy transition-colors flex items-center" 
                    onClick={() => handleSort('name')}
                  >
                    <span className="flex items-center">
                      Product Name {renderSortIcon('name')}
                    </span>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-navy transition-colors" 
                    onClick={() => handleSort('price')}
                  >
                    <span className="flex items-center">
                      Price {renderSortIcon('price')}
                    </span>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-navy transition-colors" 
                    onClick={() => handleSort('category')}
                  >
                    <span className="flex items-center">
                      Category {renderSortIcon('category')}
                    </span>
                  </TableHead>
                  <TableHead 
                    className="cursor-pointer hover:text-navy transition-colors" 
                    onClick={() => handleSort('stock')}
                  >
                    <span className="flex items-center">
                      Stock {renderSortIcon('stock')}
                    </span>
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-10 text-gray-500">
                      No products found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{formatPrice(product.price)}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <motion.button 
                            className="p-1 text-navy hover:text-burgundy transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setEditingProduct(product);
                              setShowModal(true);
                            }}
                          >
                            <Edit size={16} />
                          </motion.button>
                          <motion.button 
                            className="p-1 text-red-500 hover:text-red-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash size={16} />
                          </motion.button>
                        </div>
                      </TableCell>
                    </motion.tr>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>

      {/* Product Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-navy mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={editingProduct ? editingProduct.name : newProduct.name}
                  onChange={(e) => {
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, name: e.target.value});
                    } else {
                      setNewProduct({...newProduct, name: e.target.value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                <input
                  type="number"
                  value={editingProduct ? editingProduct.price : newProduct.price}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, price: value});
                    } else {
                      setNewProduct({...newProduct, price: value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={editingProduct ? editingProduct.category : newProduct.category}
                  onChange={(e) => {
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, category: e.target.value});
                    } else {
                      setNewProduct({...newProduct, category: e.target.value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                >
                  {categories.filter(c => c !== 'All').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                <input
                  type="number"
                  value={editingProduct ? editingProduct.stock : newProduct.stock}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, stock: value});
                    } else {
                      setNewProduct({...newProduct, stock: value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={editingProduct ? editingProduct.description || '' : newProduct.description || ''}
                  onChange={(e) => {
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, description: e.target.value});
                    } else {
                      setNewProduct({...newProduct, description: e.target.value});
                    }
                  }}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  value={editingProduct ? editingProduct.image || '' : newProduct.image || ''}
                  onChange={(e) => {
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, image: e.target.value});
                    } else {
                      setNewProduct({...newProduct, image: e.target.value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  value={editingProduct ? editingProduct.rating || 5 : newProduct.rating || 5}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, rating: value});
                    } else {
                      setNewProduct({...newProduct, rating: value});
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    setEditingProduct(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-burgundy hover:bg-burgundy/90"
                  onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

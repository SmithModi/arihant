import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Trash, Edit, X } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import AdminHeader from '@/components/AdminHeader';
import AdminSidebar from '@/components/AdminSidebar';
import CustomersList from '@/components/CustomersList';
import { categories, getSubcategoriesByCategoryName } from '@/data/categories';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  stock: number;
  description?: string;
  image?: string;
  rating?: number;
}

const AdminDashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('products');
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: 'Fabrics',
    subcategory: '',
    stock: 0,
    description: '',
    image: '',
    rating: 5
  });
  const [subcategories, setSubcategories] = useState<{ id: string, name: string }[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Fetch products from Supabase
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
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
        { id: '1', name: 'Premium Linen Fabric', price: 1500, category: 'Fabrics', subcategory: 'Linen', stock: 45 },
        { id: '2', name: 'Wedding Sherwani', price: 25000, category: 'Wedding Suites', subcategory: 'Groom', stock: 12 },
        { id: '3', name: 'Formal Business Suit', price: 12000, category: 'Formal Attires', subcategory: 'Suits', stock: 20 },
        { id: '4', name: 'Father-Son Combo', price: 15000, category: 'Theme Attires', subcategory: 'Family Sets', stock: 8 },
        { id: '5', name: 'Hotel Staff Uniform', price: 3500, category: 'Uniforms', subcategory: 'Hospitality', stock: 30 },
        { id: '6', name: 'Cotton Jeans', price: 2000, category: 'Ready to Wear', subcategory: 'Jeans', stock: 50 },
        { id: '7', name: 'Shirt Pattern Template', price: 500, category: 'Patterns', subcategory: 'Shirt Patterns', stock: 25 },
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

  // Set subcategories based on selected category
  useEffect(() => {
    if (editingProduct) {
      setSubcategories(getSubcategoriesByCategoryName(editingProduct.category));
    } else {
      setSubcategories(getSubcategoriesByCategoryName(newProduct.category || 'Fabrics'));
    }
  }, [newProduct.category, editingProduct]);

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImageFile(file);
    setUploadError(null);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Remove selected image
  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (editingProduct) {
      setEditingProduct({...editingProduct, image: undefined});
    } else {
      setNewProduct({...newProduct, image: ''});
    }
  };

  // Upload image to Supabase Storage
  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      setIsUploading(true);
      setUploadError(null);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Upload file
      const { error: uploadError, data } = await supabase.storage
        .from('products')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        setUploadError(`Upload error: ${uploadError.message}`);
        return null;
      }
      
      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);
        
      return publicUrlData.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadError(`Upload failed: ${error.message || 'Unknown error'}`);
      toast({
        title: "Failed to upload image",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

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

  // Handle adding a new product
  const handleAddProduct = async () => {
    try {
      if (!newProduct.name || !newProduct.price || !newProduct.category) {
        toast({
          title: "Validation error",
          description: "Name, price, and category are required fields",
          variant: "destructive"
        });
        return;
      }

      let imageUrl = newProduct.image;
      
      // Upload image if one was selected
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
        if (!imageUrl && !newProduct.image) {
          toast({
            title: "Image upload failed",
            description: uploadError || "Please try again or use an image URL",
            variant: "destructive"
          });
          return;
        }
      }

      const productData = {
        name: newProduct.name,
        price: newProduct.price,
        category: newProduct.category,
        subcategory: newProduct.subcategory || null,
        stock: newProduct.stock || 0,
        description: newProduct.description || null,
        image: imageUrl || null,
        rating: newProduct.rating || 5
      };
      
      console.log('Adding product with data:', productData);
      
      const { data, error } = await supabase
        .from('products')
        .insert(productData)
        .select();

      if (error) {
        console.error('Error from Supabase:', error);
        throw error;
      }

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
        subcategory: '',
        stock: 0,
        description: '',
        image: '',
        rating: 5
      });
      setImageFile(null);
      setImagePreview(null);
      setUploadError(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: "Failed to add product",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Handle updating an existing product
  const handleUpdateProduct = async () => {
    try {
      if (!editingProduct) return;

      let imageUrl = editingProduct.image;
      
      // Upload image if one was selected
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
        if (!imageUrl && !editingProduct.image) {
          toast({
            title: "Image upload failed",
            description: uploadError || "Please try again or use an image URL",
            variant: "destructive"
          });
          return;
        }
      }

      const productData = {
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
        subcategory: editingProduct.subcategory || null,
        stock: editingProduct.stock || 0,
        description: editingProduct.description || null,
        image: imageUrl || null,
        rating: editingProduct.rating || 5
      };
      
      console.log('Updating product with data:', productData);

      const { data, error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', editingProduct.id)
        .select();

      if (error) {
        console.error('Error from Supabase:', error);
        throw error;
      }

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
      setImageFile(null);
      setImagePreview(null);
      setUploadError(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error updating product:', error);
      toast({
        title: "Failed to update product",
        description: error.message || "Please try again later",
        variant: "destructive"
      });
    }
  };

  // Handle deleting a product
  const handleDeleteProduct = async (productId: string) => {
    try {
      if (!confirm("Are you sure you want to delete this product?")) return;

      const { error } = await supabase
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

  const handleBackToSite = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleNavigate = (route: string) => {
    setActiveTab(route);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    if (editingProduct) {
      setEditingProduct({...editingProduct, category: value, subcategory: ''});
    } else {
      setNewProduct({...newProduct, category: value, subcategory: ''});
    }
    
    setSubcategories(getSubcategoriesByCategoryName(value));
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Admin Sidebar */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
        onBackToSite={handleBackToSite}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
        activeRoute={activeTab}
      />
      
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <AdminHeader 
          title={activeTab === 'products' ? "Product Management" : "Customer Management"} 
          user={user} 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="p-6">
          {activeTab === 'products' ? (
            <>
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
                  
                  <Button 
                    className="bg-burgundy hover:bg-burgundy/90 flex items-center"
                    onClick={() => {
                      setShowModal(true);
                      setEditingProduct(null);
                      setImageFile(null);
                      setImagePreview(null);
                      setUploadError(null);
                      setNewProduct({
                        name: '',
                        price: 0,
                        category: 'Fabrics',
                        subcategory: '',
                        stock: 0,
                        description: '',
                        image: '',
                        rating: 5
                      });
                      setSubcategories(getSubcategoriesByCategoryName('Fabrics'));
                    }}
                  >
                    <Plus size={16} className="mr-1" /> Add New Product
                  </Button>
                </div>
                
                <div className="mb-6 overflow-x-auto">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      key="All"
                      onClick={() => setSelectedCategory('All')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        selectedCategory === 'All'
                          ? 'bg-navy text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          selectedCategory === category.name
                            ? 'bg-navy text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.name}
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
                            Product Name
                          </span>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:text-navy transition-colors" 
                          onClick={() => handleSort('price')}
                        >
                          <span className="flex items-center">
                            Price
                          </span>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:text-navy transition-colors" 
                          onClick={() => handleSort('category')}
                        >
                          <span className="flex items-center">
                            Category
                          </span>
                        </TableHead>
                        <TableHead>
                          <span className="flex items-center">
                            Subcategory
                          </span>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer hover:text-navy transition-colors" 
                          onClick={() => handleSort('stock')}
                        >
                          <span className="flex items-center">
                            Stock
                          </span>
                        </TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-10 text-gray-500">
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
                            <TableCell>{product.subcategory || 'N/A'}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>
                              {product.image ? (
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-10 h-10 object-cover rounded-md"
                                />
                              ) : (
                                <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                                  No image
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <motion.button 
                                  className="p-1 text-navy hover:text-burgundy transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => {
                                    setEditingProduct(product);
                                    setImagePreview(product.image || null);
                                    setImageFile(null);
                                    setUploadError(null);
                                    setShowModal(true);
                                    setSubcategories(getSubcategoriesByCategoryName(product.category));
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
            </>
          ) : (
            <CustomersList />
          )}
        </div>
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
                <Select
                  value={editingProduct ? editingProduct.category : newProduct.category}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
                <Select
                  value={editingProduct ? editingProduct.subcategory : newProduct.subcategory}
                  onValueChange={(value) => {
                    if (editingProduct) {
                      setEditingProduct({...editingProduct, subcategory: value});
                    } else {
                      setNewProduct({...newProduct, subcategory: value});
                    }
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subcategory" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {subcategories.map(subcategory => (
                      <SelectItem key={subcategory.id} value={subcategory.id}>{subcategory.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Choose File
                  </label>
                  <span className="text-sm text-gray-500 truncate max-w-[200px]">
                    {imageFile ? imageFile.name : 'No file chosen'}
                  </span>
                </div>
                
                {/* Image Preview with remove button */}
                {imagePreview && (
                  <div className="mt-4 relative">
                    <p className="text-sm text-gray-500 mb-2">Preview:</p>
                    <div className="relative inline-block">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="h-40 object-contain border rounded-md"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title="Remove image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Existing Image URL with remove button */}
                {!imageFile && !imagePreview && (editingProduct?.image || newProduct.image) && (
                  <div className="mt-4 relative">
                    <p className="text-sm text-gray-500 mb-2">Current image:</p>
                    <div className="relative inline-block">
                      <img 
                        src={editingProduct?.image || newProduct.image} 
                        alt="Current" 
                        className="h-40 object-contain border rounded-md"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title="Remove image"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                )}
                
                {uploadError && (
                  <div className="mt-2 text-red-500 text-sm">
                    {uploadError}
                  </div>
                )}
                
                {/* Image URL input as fallback */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Or enter image URL
                  </label>
                  <input
                    type="text"
                    value={
                      editingProduct 
                        ? (imageFile ? '' : editingProduct.image || '') 
                        : (imageFile ? '' : newProduct.image || '')
                    }
                    onChange={(e) => {
                      if (editingProduct) {
                        setEditingProduct({...editingProduct, image: e.target.value});
                      } else {
                        setNewProduct({...newProduct, image: e.target.value});
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-burgundy"
                    placeholder="https://example.com/image.jpg"
                    disabled={!!imageFile}
                  />
                </div>
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
                    setImageFile(null);
                    setImagePreview(null);
                    setUploadError(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-burgundy hover:bg-burgundy/90"
                  onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : (editingProduct ? 'Update Product' : 'Add Product')}
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

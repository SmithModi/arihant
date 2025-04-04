
import React, { useState } from 'react';
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
import { formatPrice } from '@/lib/utils';

// Sample product data
const sampleProducts = [
  { id: '1', name: 'Premium Linen Fabric', price: 1500, category: 'Fabrics', stock: 45 },
  { id: '2', name: 'Wedding Sherwani', price: 25000, category: 'Wedding Suites', stock: 12 },
  { id: '3', name: 'Formal Business Suit', price: 12000, category: 'Formal Attires', stock: 20 },
  { id: '4', name: 'Father-Son Combo', price: 15000, category: 'Theme Attires', stock: 8 },
  { id: '5', name: 'Hotel Staff Uniform', price: 3500, category: 'Uniforms', stock: 30 },
  { id: '6', name: 'Cotton Jeans', price: 2000, category: 'Ready to Wear', stock: 50 },
  { id: '7', name: 'Shirt Pattern Template', price: 500, category: 'Patterns', stock: 25 },
];

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Sort and filter products
  const filteredProducts = sampleProducts
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
          <Button className="bg-burgundy hover:bg-burgundy/90 flex items-center">
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
                <h3 className="text-3xl font-bold text-navy">{sampleProducts.length}</h3>
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
                  {sampleProducts.reduce((total, product) => total + product.stock, 0)}
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
                  {formatPrice(sampleProducts.reduce((total, product) => total + (product.price * product.stock), 0))}
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
                          >
                            <Edit size={16} />
                          </motion.button>
                          <motion.button 
                            className="p-1 text-red-500 hover:text-red-700 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
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
    </div>
  );
};

export default AdminDashboard;

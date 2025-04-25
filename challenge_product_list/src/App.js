import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductTable />} />
        <Route path="/products/new" element={<AddProduct />} />
        <Route path="/products/:id" element={<ShowProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

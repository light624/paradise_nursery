// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import ProductListing from './components/ProductListing/ProductListing';
import CartPage from './components/CartPage/CartPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </Router>
);

export default App;

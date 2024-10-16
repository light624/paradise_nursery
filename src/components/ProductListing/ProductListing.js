// src/components/ProductListing.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { selectAllProducts } from '../../features/productsSlice';
import './ProductListing.css';

const ProductListing = () => {
  const products = useSelector(selectAllProducts);

  return (
    <div className="product-listing">
      <div className="product-section">
        <h2>Aromatic Plants</h2>
        <div className="product-grid">
          {products.filter(product => product.category === 'Aromatic').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="product-section">
        <h2>Medicinal Plants</h2>
        <div className="product-grid">
          {products.filter(product => product.category === 'Medicinal').map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

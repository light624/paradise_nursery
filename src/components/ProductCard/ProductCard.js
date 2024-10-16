// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import './ProductCart.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

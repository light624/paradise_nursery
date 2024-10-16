// src/components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  selectCartItems, selectCartTotal } from '../../features/cartSlice';
import CartItem from '../CartItem/CartItem';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">Total: ${totalCost.toFixed(2)}</div>
      <div className="cart-buttons">
        <button 
          className="continue-shopping" 
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
        <button 
          className="checkout" 
          onClick={() => navigate('/')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
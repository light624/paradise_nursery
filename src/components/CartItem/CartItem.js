// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../../features/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button
          className="quantity-button"
          onClick={() => dispatch(adjustQuantity({ id: item.id, quantity: item.quantity - 1 }))}
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button
          className="quantity-button"
          onClick={() => dispatch(adjustQuantity({ id: item.id, quantity: item.quantity + 1 }))}
        >
          +
        </button>
      </div>
      <button
        className="delete-button"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;

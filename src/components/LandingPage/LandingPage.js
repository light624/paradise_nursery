// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
  <div className='landing-page'>
    <h1>Welcome to Paradise Nursery!</h1>
    <Link to="/products">
      <button>Shop Now</button>
    </Link>
  </div>
);

export default LandingPage;

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';
import './index.css';

const Popup = ({ product }) => {
  const { addToCart } = useDataContext();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    // Auto-hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <button onClick={() => handleAddToCart(product)} className="card-button">
        Add to Cart
      </button>

      {showPopup && (
        <div className="popup">
          <p>Added to Cart</p>
          <button className="close-button" onClick={() => setShowPopup(false)}>✖</button>

          <Link to="/cart">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </Link>
        </div>
      )}
    </div>
  );
};

export default Popup;

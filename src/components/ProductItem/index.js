// src/components/ProductItem.js
import React, { useState } from 'react';
import { useDataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import './index.css';

const ProductItem = ({ product }) => {
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
    <li className="product-item">
      <div className="link-item">
        <img
          src={product.image}
          alt={product.title}
          className="thumbnail"
        />
        <h2 className="title">{product.title}</h2>
        <p className="price">Price: ${product.price}</p>
        <div className="rating-container">
          <p className="rating">Rating: {product.rating.rate}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>

        <button onClick={() => handleAddToCart(product)} className="card-button">
          Add to Cart
        </button>

        {/* Popup Notification */}
        {showPopup && (
          <div className="popup">
            <p>Added to Cart</p>
            <p>{product.title}
            </p>
            <button className="close-button" onClick={() => setShowPopup(false)}>✖</button>
            <Link to="/cart">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </Link>
          </div>
        )}
      </div>
    </li>
  );
};

export default ProductItem;

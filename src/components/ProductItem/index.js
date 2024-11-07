// src/components/ProductItem.js
import React from 'react';
import { useDataContext } from '../../context/DataContext';
import './index.css'

const ProductItem = ({ product }) => {
  const { addToCart } = useDataContext();

  return (
    <li className="product-item">
    <div className="link-item">

      <img 
        src={product.image}
        alt={product.title} 
        className="thumbnail" // Add a class for styling if needed
      />
      <h2 className='title'>{product.title}</h2>
      
      <p className="price">Price: ${product.price}</p>
      <div className="rating-container">
            <p className="rating">Rating: {product.rating.rate}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
       </div>

       <button onClick={() => addToCart(product)} className='card-button'>Add to Cart</button>
       
          </div>
    </li>
  );
};

export default ProductItem;


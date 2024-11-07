// src/components/Cart/CartSummary.js
import React from 'react';
import { useDataContext } from '../../context/DataContext';
import EmptyCart from '../EmptyCart';
import './index.css';

const CartSummary = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, calculateTotal } = useDataContext();

  return (
    <div className="cart-summary">
      <h2 className='cart_su'>Cart Summary</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul className="cart-items-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img className="cart-product-image" src={item.image} alt={item.title} />
                <div className="cart-item-details-container">
                  <div className="cart-product-title-brand-container">
                    <p className="cart-product-title">{item.title}</p>
                  </div>
                  <div className="cart-quantity-container">
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <p className="cart-quantity"><span>{item.quantity}</span></p>
                    <button
                      type="button"
                      className="quantity-controller-button"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price-remove-container">
                    <p className="cart-total-price">
                      Subtotal: ${ (item.price * item.quantity).toFixed(2) }
                    </p>
                    
                  </div>
                  <button
                      className="remove-button remove"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                     remove
                    </button>
                </div>
                <button
        className="delete-button"
        type="button"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3 className='total'>Total: ${ calculateTotal().toFixed(2) }</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;

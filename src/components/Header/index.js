// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../assets/logo.webp';
import './index.css';

const Header = () => {
  return (
    <header>
      <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src=''
              alt="website logo"
            />
          </Link>
          <button
            type="button"
            className="nav-mobile-btn"
            
          >
            <Link to='/Login'><img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            /></Link>
            
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
             src=''
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/productList" className="nav-link">Products</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              
              </Link>
            </li>

            
          </ul>
           <Link to="/Login" className="logout-desktop-btn">
          <button
            type="button"
            className="logout-desktop-btn"
           
          >
            Login
          </button>
        </Link>
          
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/productList" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;


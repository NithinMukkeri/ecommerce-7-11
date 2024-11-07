// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Header from '../Header';
//import Filters from './Filters';
import Filters from '../Filters';
//import ProductList from '../ProductList';
import ProductList from '../ProductList';
import './index.css';
import homepage from '../../assets/homepage.webp';

const Home = () => {
  return (
    <>
    
    <main className="home-container ok">
      <div className="home-content ">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src={homepage}
          alt="Stylish clothing displayed on a mannequin"
          className="home-mobile-img nani"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you seen and heard in the
          way you are. So, celebrate the season's new and exciting fashion
          in your own way.
        </p>
        <Link to="/ProductList">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
      src={homepage}
        alt="Showcase of fashionable clothes"
        className="home-desktop-img nani"
      />
     
    </main>
    <Filters/>
    <ProductList/>
  </>
  );
};

export default Home;

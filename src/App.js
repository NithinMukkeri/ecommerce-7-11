// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
//import Login from './pages/Login';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductList" element={<ProductList/>}/>
      </Routes>
    </Router>
  );
}

export default App;

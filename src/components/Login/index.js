// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img.jpg'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    alert(`Logged in as ${username}`);
  };

  return (
   
    <div className="login-form-container nani">
    <img
      src=""
      className="login-website-logo-mobile-img"
      alt="website logo"
    />
    <img
      src={img}
      className="login-img nani"
      alt="website login"
    />
    <form className="form-container nani" onSubmit={handleLogin}>
      <img
        src={img}
        className="login-website-logo-desktop-img nani"
        alt="website logo" 
      />
      <div className="input-container nani">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
          className="username-input-field"
        
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
         type="password"
         placeholder="Password"
         className="password-input-field"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         
        />
      </div>
      <Link to="/"> <button type="submit" className="login-button">
        Login
      </button>
      
      </Link>
     
     
    </form>
  </div>
  );
};

export default Login;

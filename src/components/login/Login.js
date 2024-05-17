// src/Signup.js
import React, { useState } from 'react';
import '../../index.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="logo">Coding Comp</h1>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>- OR -</p>
        <div className="social-widgets">
          <div className="social-widget">
            <img src={require('../../assets/Google__G__logo.svg.png')} alt="Google" className="social-logo" />
            <span>Google</span>
          </div>
          <div className="social-widget">
            <img src={require('../../assets/Facebook_f_logo_(2019).svg.png')} alt="Facebook" className="social-logo" />
            <span>Facebook</span>
          </div>
          <div className="social-widget">
            <img src={require('../../assets/Apple_logo_black.svg.png')} alt="Apple" className="social-logo" />
            <span>Apple</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

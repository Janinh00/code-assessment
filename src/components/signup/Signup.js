// src/Signup.js
import React, { useState } from 'react';
import '../../index.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simple validation checks
    const isFullNameValid = fullName.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isPasswordValid = password.trim() !== '';

    setIsFullNameValid(isFullNameValid);
    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isPasswordValid);

    if (isFullNameValid && isEmailValid && isPasswordValid) {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="logo">Hackathon</h1>
        <h2>Create Account</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={!isFullNameValid ? 'input-error' : ''}
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
            className={!isEmailValid ? 'input-error' : ''}
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
            className={!isPasswordValid ? 'input-error' : ''}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>- Or Sign Up with -</p>
        <div className="social-widgets">
          <div className="social-widget">
            <img src={require('../../assets/Google__G__logo.svg.png')} alt="Google" className="social-logo" />
          </div>
          <div className="social-widget">
            <img src={require('../../assets/Facebook_f_logo_(2019).svg.png')} alt="Facebook" className="social-logo" />
          </div>
          <div className="social-widget">
            <img src={require('../../assets/Apple_logo_black.svg.png')} alt="Apple" className="social-logo" />
          </div>
        </div>
        <p className="login-prompt">Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
};

export default Signup;

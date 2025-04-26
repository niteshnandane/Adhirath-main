import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/robo.png" alt="robot" className="robot-icon" />
        <h1 className="brand-title">Adhirath</h1>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">Log in</button>
        <p className="forgot-password">Forgot password?</p>
        <p className="signup-link">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <img src="/boy.png" alt="kid" className="kid-img" />
    </div>
  );
};

export default LoginPage;

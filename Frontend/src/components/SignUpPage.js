import React from "react";
import { Link } from "react-router-dom";
import './SignUpPage.css';  // Ensure this line is correct

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="flex justify-center mb-4">
          <img
            src="robo.png"
            alt="Robot"
            className="robot-img"
          />
        </div>
        <h2 className="title">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button
            type="submit"
            className="signup-btn"
          >
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <img
          src="boy.png"
          alt="Boy walking"
          className="boy-img"
        />
    </div>
  );
};

export default SignUpPage;

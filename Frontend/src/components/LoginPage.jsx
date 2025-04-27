import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import kidImg from '../assets/kid.png';
import awardGif from '../assets/award.gif';
import rocketGif from '../assets/rocket.gif';
import supportGif from '../assets/support.gif';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSignupClick = () => {
    navigate('/');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill all fields!');
      return;
    }
    if (formData.password !== '1234') {
      setError('Wrong Password! Try 1234');
      return;
    }
    setError('');
    console.log('Login Success');
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Rocket GIF */}
      <motion.img
        src={rocketGif}
        alt="Rocket"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 absolute left-40 top-1/2 transform -translate-y-1/2"
      />

      {/* Support GIF */}
      <motion.img
        src={supportGif}
        alt="Support"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 absolute right-40 top-1/4 transform -translate-y-1/2"
      />

      {/* Kid Image */}
      <motion.img
        src={kidImg}
        alt="Kid"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-64 h-64 absolute right-10 top-1/2 transform -translate-y-1/2"
      />

      {/* Login Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 mt-10 z-10"
      >
        <h1 className="text-2xl mb-6 text-center text-gray-900 dark:text-white">Login Page</h1>

        {/* Award GIF */}
        <div className="flex justify-center mb-4">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            src={awardGif}
            alt="Award"
            className="w-20 h-20"
          />
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="mb-2">
          <label className="block mb-2 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-4">
          <button
            type="button"
            onClick={handleForgotPasswordClick}
            className="text-blue-400 hover:text-blue-600 text-sm underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-full py-2 text-white rounded hover:bg-blue-700 transition-all duration-300"
        >
          Login
        </button>

        <div className="text-center mt-4">
          <p className="text-gray-700 dark:text-gray-300">Don't have an account?</p>
          <button
            type="button"
            onClick={handleSignupClick}
            className="text-blue-500 underline mt-2 hover:text-blue-700"
          >
            Signup
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default LoginPage;

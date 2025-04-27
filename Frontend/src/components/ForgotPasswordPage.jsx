import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email!');
      return;
    }
    setMessage('Password reset link has been sent to your email!');
    console.log('Reset email sent to:', email);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80"
      >
        <h1 className="text-2xl mb-6 text-center text-gray-900 dark:text-white">
          Forgot Password
        </h1>

        {message && (
          <p className="text-center mb-4 text-green-600 dark:text-green-400">
            {message}
          </p>
        )}

        <div className="mb-4">
          <label className="block mb-2 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-purple-500 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-purple-500 w-full py-2 text-white rounded hover:bg-purple-700 transition-all duration-300"
        >
          Send Reset Link
        </button>

        <div className="text-center mt-4">
          <button
            onClick={handleBackToLogin}
            className="text-purple-500 underline hover:text-purple-700"
          >
            Back to Login
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ForgotPasswordPage;

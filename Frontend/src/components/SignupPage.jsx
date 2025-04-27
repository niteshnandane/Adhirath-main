import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation
import kidImg from '../assets/kid.png';
import awardGif from '../assets/award.gif';
import supportGif from '../assets/support.gif';
import schoolGif from '../assets/school-board.gif';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill all fields!');
      return;
    }
    setError('');
    console.log('Signup Success', formData);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gray-100">
      {/* Rocket GIF at left middle */}
      <motion.img
        src={schoolGif}
        alt="School"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 object-cover absolute left-40 top-1/2 transform -translate-y-1/2"
      />
      
        <motion.img
        src={supportGif}
        alt="support"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 object-cover absolute right-40 top-1/4 transform -translate-y-1/2"
      />

      {/* Kid image at right middle */}
      <motion.img
        src={kidImg}
        alt="Kid"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-64 h-64 object-cover absolute right-10 top-1/2 transform -translate-y-1/2"
      />

      {/* Signup Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg w-80 mt-10 z-10"
      >
        <h1 className="text-2xl mb-6 text-center">Signup Page</h1>

        {/* GIF inside form */}
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
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:border-green-500 focus:outline-none"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 w-full py-2 text-white rounded hover:bg-green-700 transition-all duration-300"
        >
          Signup
        </button>
        <div className="text-center mt-4">
          <p>Already have an account?</p>
          <button
            onClick={handleLoginClick}
            className="text-green-500 underline mt-2 hover:text-green-700"
          >
            Login
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default SignupPage;

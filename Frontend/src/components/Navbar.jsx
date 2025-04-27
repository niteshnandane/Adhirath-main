import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white font-times">
      <div className="flex items-center">
        <img src="/favicon.ico" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Adhirath</span>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="#features" className="hover:text-gray-300">Features</Link></li>
        <li><Link to="#games" className="hover:text-gray-300">Games</Link></li>
        <li><Link to="#learning" className="hover:text-gray-300">Learning</Link></li>
        <li><Link to="#stories" className="hover:text-gray-300">About</Link></li>
        <li><Link to="#faq" className="hover:text-gray-300">FAQ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


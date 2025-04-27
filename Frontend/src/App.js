import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
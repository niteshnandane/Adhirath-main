import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h2 className="font-bold mb-2">Support Adhirath</h2>
          <p>Means</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Features</h2>
          <p>Features Description</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Resources</h2>
          <p>resources@email.com</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Contact</h2>
          <p>Contact Info Here</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

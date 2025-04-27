import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h2 className="font-bold mb-2">Adhirath</h2>
          <p>This is a App developed for NEURODEVOLPMENT CHALLENGE KIDS </p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Features</h2>
          <p>This App Contains All the Games and Puzzles.</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Resources</h2>
          <p>resources@email.com</p>
          <p>Contact Info Here</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

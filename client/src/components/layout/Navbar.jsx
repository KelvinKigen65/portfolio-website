// components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        <div className="flex space-x-4">
          <Link to="#about" className="hover:text-gray-300">About</Link>
          <Link to="#projects" className="hover:text-gray-300">Projects</Link>
          <Link to="#contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Must be default export
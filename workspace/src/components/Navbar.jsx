import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Restaurant Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">MyRestaurant</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/menu" className="text-white hover:text-gray-300">Menu</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 mt-2">
          <Link to="/" onClick={toggleMenu} className="block text-white px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link to="/menu" onClick={toggleMenu} className="block text-white px-4 py-2 hover:bg-gray-600">Menu</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-white px-4 py-2 hover:bg-gray-600">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-white px-4 py-2 hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

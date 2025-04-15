import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm border-b bg-white">
      <Link to="/" className="text-xl font-bold text-indigo-600">SYN</Link>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
        <Link to="/camera" className="text-gray-600 hover:text-indigo-600">Camera</Link>
      </nav>
    </header>
  );
}

export default Navbar;

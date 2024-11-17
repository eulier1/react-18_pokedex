import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">React 18 Pokédex</Link>
      </div>
    </nav>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonCard = ({ pokemon }) => {
  return (
    <Link 
      to={`/pokemon/${pokemon.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />
        <div className="text-center mt-4">
          <p className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</p>
          <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
        </div>
      </div>
    </Link>
  );
};
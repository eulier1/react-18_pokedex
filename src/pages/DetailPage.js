import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon details');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!pokemon) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to List
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48 mx-auto"
          />
          <p className="text-gray-500 mt-4">#{pokemon.id.toString().padStart(3, '0')}</p>
          <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Abilities</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize"
                >
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
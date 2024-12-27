import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=10`
        );
        const data = await response.json();
        setRecipes(data.results);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`); // Navigate to the recipe details page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Search Results for "{query}"</h1>
      <div>
        {recipes.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                onClick={() => handleViewRecipe(recipe.id)}
                style={{
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                <h3>{recipe.title}</h3>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{ width: '100px', borderRadius: '5px' }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
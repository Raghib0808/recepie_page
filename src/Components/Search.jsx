import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_KEY = '3ded09f5fc054e248d1137dc1a6e93a9';

  const handleSearch = async () => {
    if (!query) {
      setError('Please enter a search term.');
      return;
    }

    setLoading(true);
    setError('');

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

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`); // Navigate to the recipe details page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Search</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by recipe name or ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#6f6ab1',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {recipes.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
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
          </div>
        ) : (
          !loading && <p>No recipes found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
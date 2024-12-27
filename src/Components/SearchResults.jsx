import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q'); 

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

    if (query) {
      fetchRecipes();
    }
  }, [query]);

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="search-results-container">

      
    <h1 className="search-results-title">Search Results for "{query}"</h1>
    
    <div className="recipes-list">
  {recipes.length > 0 ? (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => handleViewRecipe(recipe.id)}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-card-image"
          />
          <div className="recipe-card-content">
            <h3 className="recipe-card-title">{recipe.title}</h3>
            <p className="recipe-card-description">{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="no-results">No recipes found. Try a different search term.</p>
  )}
</div>

    </div>
  );
};

export default SearchResults;
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import Skeleton from './Shimmer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Search from './Search';

const RecipeNameType = () => {
  const [data, setData] = useState([]);
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const BASE_URL = "https://api.spoonacular.com/recipes";
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate(); // Initialize useNavigate

  const api = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/complexSearch?apiKey=${apiKey}&number=10&addRecipeInformation=true&addRecipeNutrition=true`
      );
      const value = await response.json();
      setData(value.results);
      console.log(value);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const handleReadMore = (id) => {
    setExpandedRecipe(id === expandedRecipe ? null : id);
  };

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`); // Navigate to the recipe details page
  };

  useEffect(() => {
    api();
  }, []);

  if (!data || data.length === 0) {
    return <Skeleton />;
  }

  return (
    <>
    <Search/>
    <div className='cards'>
      {data.map((recipe, id) => (
        <div key={id} className='id_card img_container'>
          <div>
            <img src={recipe.image} alt={recipe.title} width="200" />
          </div>

          <div className='id_card_text'>
            <h3>{recipe.title}</h3>
            {expandedRecipe === id
              ? <div className='show'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(recipe.summary),
                  }}
                  />
                  : <div className='show'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncateText(recipe.summary, 80)),
                  }}
                  />
                }
            <button className='button' onClick={() => handleViewRecipe(recipe.id)}>
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </div>
                </>
  );
};

export default RecipeNameType;
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import Skeleton from './skeleton';

const RecipeNameType = () => {
  const [data, setData] = useState([]);
  const [expandedRecipe, setExpandedRecipe] = useState(null); 
  const BASE_URL = "https://api.spoonacular.com/recipes";
  const apiKey = 'c96d307285d245a9bd1b24e509052591';

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

  useEffect(() => {
    api();
  }, []);
  
  if(!data ||data.length===0){
    return <Skeleton />
  }
  return (
    <div className='cards '>
      {data.map((recipe, id) => (
        <div key={id} className='id_card img_container '>
          <div className=''>
          <img src={recipe.image} alt={recipe.title} width="200" className=''  />
          </div>
 
          <div className='id_card_text '>
            <h3 className=''>{recipe.title}</h3>
            {expandedRecipe === id
              ? <div className='show '
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(recipe.summary),
                  }}
                />
              : <div className='show '
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncateText(recipe.summary, 80)), 
                  }}
                />
            }
           <button className='button ' onClick={() => handleReadMore(id)}>
            {expandedRecipe === id ? "Show Less" : "Read More"}
          </button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default RecipeNameType;

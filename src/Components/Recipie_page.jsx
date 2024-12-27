import React, { useState } from 'react'
import Ingredients from './Ingredients';
import { useParams } from 'react-router-dom';

const Recipie_page = () => {
    const { id } = useParams();
    const [recipe,SetRecipie]=useState([]);
    const [loading,SetLoading]=useState(true)
    const BASE_URL = "https://api.spoonacular.com/recipes";
    const apiKey = import.meta.env.VITE_API_KEY;
  

    const load=async()=>{
        const data=await fetch(`${BASE_URL}/${id}/information?apiKey=${apiKey}`);
        const output=await data.json();
        console.log(output);
        SetLoading(false)
        SetRecipie(output);
    }

  
    
    
    useState(()=>{
            load();
    },[])

  return (
    <>
    <div className={`header ${loading ? 'skeleton' : ''}`}>
        <div className='title'>
            
            <h1>{recipe.title} </h1>
        </div>
        <div className='header_img'>
        <img src={recipe.image} />
        </div>



    </div>

         <Ingredients props={recipe}/>
         
    </>
   )
}

export default Recipie_page

import React, { useState } from 'react'
import Ingredients from './Ingredients';

const Recipie_page = () => {
    const [recipe,SetRecipie]=useState([]);
    const [loading,SetLoading]=useState(true)

    const load=async()=>{
        const data=await fetch("https://api.spoonacular.com/recipes/716406/information?apiKey=3ded09f5fc054e248d1137dc1a6e93a9");
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

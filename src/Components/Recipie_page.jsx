import React, { useState } from 'react'


const Recipie_page = () => {
    const [recipe,SetRecipie]=useState([]);
    const [loading,SetLoading]=useState(true)

    const load=async()=>{
        const data=await fetch("https://api.spoonacular.com/recipes/715415/information?apiKey=c96d307285d245a9bd1b24e509052591");
        const output=await data.json();
        console.log(output);
        SetLoading(false)
        SetRecipie(output);
    }

  
    
    
    useState(()=>{
            load();
    },[])

  return (
    <div className={`header ${loading ? 'skeleton' : ''}`}>
        <div className='title'>
            
            <h1>{recipe.title} </h1>
        </div>
        <div className='header_img'>
        <img src={recipe.image} />
        </div>
    </div>
  )
}

export default Recipie_page

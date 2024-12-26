import React from 'react'

const Skeleton = () => {
    
  return (
    <div>
       <div className='cards '>
      {[...Array(10)].map((recipe, id) => (
        <div key={id} className='id_card img_container '>
          <div className='skeleton'>
            <div className='placeholder skeleton'></div>
          </div>
 
          <div className='id_card_text '>
            <h3 className='skeleton hold'></h3>
                <div className='skeleton'> </div>
           <button className='bu skeleton'>
          </button>
          </div>
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default Skeleton;



import React, { useEffect, useState } from 'react'
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';         
import 'primeicons/primeicons.css';                        
import 'primeflex/primeflex.css';    
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Ingredients = ({
    props}) => {
    
        
        const [Ingredients,setIngredients]=useState([])
        useEffect(()=>{
            setIngredients(props.extendedIngredients);
        },[props])

        console.log(Ingredients,'main');
        console.log(props,'send');
     
        const imageTemplate = (rowData) => {
             const imageUrl = `https://spoonacular.com/cdn/ingredients_100x100/${rowData.image}`;
            return (
                <img
                    src={imageUrl}
                    alt={rowData.nameClean}
                    style={{ width: '80px', height: '60px', borderRadius: '50%' }}
                />
            );
        };
     
    
  return (
    <>
    <div>
        <h1>Prepration Method:</h1>
        {/* <p>{props.instructions}</p> */}
        <div style={{
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    boxShadow: '0 4px 8px rgba(111, 106, 177, 0.6)', // Purple shadow effect
    transition: 'box-shadow 0.3s ease-in-out', // Smooth shadow transition
}}
                    dangerouslySetInnerHTML={{ __html: props.instructions }} />
        </div>
    <div className=''>
            <h1>Ingredients List: </h1>
    </div>
    <div>
            <DataTable showGridlines tableStyle={{ minWidth: '50rem' }} value={Ingredients}>
                 <Column header="Image" body={imageTemplate}></Column>
                 <Column field="original" header="Quantity "></Column>
                <Column field="nameClean" header="Ingredients"></Column>
                
            </DataTable>
        </div>
    </>
  )
}

export default Ingredients

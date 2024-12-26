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
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
            );
        };
     
    
  return (
    <div>
            <DataTable value={Ingredients}>
                <Column field="nameClean" header="Ingredients"></Column>
                 <Column field="original" header="Quantity "></Column>
                 <Column header="Image" body={imageTemplate}></Column>
                
            </DataTable>
        </div>
  )
}

export default Ingredients

import React from 'react';
import style from "./ItemListContainer.module.css";


const ItemListContainer =(prop)=>{


    return(
        <div>
        <h1>{prop.greeting}</h1>

        </div>
    )
}

export default ItemListContainer;
import { createContext, useState } from "react";

export const contexto= createContext();

const {Provider}= contexto;

const CustomProvider=({children})=>{

    const [cart,setCart]= useState([]);
    
    
    const addToCart = (product, count) => {
        const item = { product, count };
        setCart([...cart, item]);
      };



    const clearCart=()=>{
        setCart([]);
    }





    const contextValue={
        clearCart,
        addToCart, 
        cart
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;
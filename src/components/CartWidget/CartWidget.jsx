import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from "./CartWidget.module.css";


const CartWidget=()=>{

    const [cantidad, setCantidad]=useState(1);

    return(
        <div className={style.container}>
            <ShoppingCartIcon/>
            <p>{cantidad}</p>
        </div>
    )
}


export default CartWidget;
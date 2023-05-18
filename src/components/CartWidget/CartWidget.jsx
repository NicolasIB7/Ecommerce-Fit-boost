import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const CartWidget = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleSumar = () => {
    if(count<stock){
    setCount(count + 1);
    }
  };
  const handleRestar = () => {
    if(count>1){
    setCount(count - 1)};
  };
  return (
    <div className={style.container}>
      <ShoppingCartIcon />
      <strong>{count}</strong>

      <div className={style.botones}>
        <Button variant='text' onClick={handleRestar} sx={{ fontSize: 25, color:"#004E64" }}>
          {" "}
          -{" "}
        </Button>

        <Button variant='text' onClick={handleSumar} sx={{ fontSize: 25, color:"#004E64" }}>
          {" "}
          +{" "}
        </Button>
        
      </div>
      
      <IconButton
        color='primary'
        aria-label='add to shopping cart'
        onClick={() => onAdd(count)}
        style={{ scale: "0.8", color:"#004E64" }}>
        Agregar <AddShoppingCartIcon />
      </IconButton>
      <p style={{fontSize:10, color:"brown", fontWeight:"bold"}}>Últimos {stock} en stock</p>
    </div>
  );
};

export default CartWidget;

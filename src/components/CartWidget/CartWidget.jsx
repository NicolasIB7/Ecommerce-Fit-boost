import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const CartWidget = ({onAdd}) => {
  const [count, setCount] = useState(1);

  const handleSumar = () => {
    setCount(count + 1);
  };
  const handleRestar = () => {
    setCount(count - 1);
  };
  return (
    <div className={style.container}>
      <ShoppingCartIcon />
      <strong>{count}</strong>

      <div className={style.botones}>

      <Button variant="text" onClick={handleRestar}>
        {" "}
        -{" "}
        </Button>
      

      <Button variant="text" onClick={handleSumar}>
        {" "}
        +{" "}
        </Button>

      </div>
      
      <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>onAdd(count)} style={{scale:"0.8"}}>
        Agregar {" "}<AddShoppingCartIcon />
        
      </IconButton>
    </div>
  );
};

export default CartWidget;

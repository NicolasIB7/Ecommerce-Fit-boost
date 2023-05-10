import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";

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
      <button onClick={handleRestar}>
        {" "}
        -{" "}
      </button>
      <strong>{count}</strong>
      <button onClick={handleSumar}>
        {" "}
        +{" "}
      </button>
     
      <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default CartWidget;

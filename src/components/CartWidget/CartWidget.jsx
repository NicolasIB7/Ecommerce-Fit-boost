import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";

const CartWidget = () => {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    setCantidad(cantidad - 1);
  };
  return (
    <div className={style.container}>
      <ShoppingCartIcon />
      <p>{cantidad}</p>
      <span onClick={handleSumar}>Sumar</span>
      <span onClick={handleRestar}>Restar</span>
    </div>
  );
};

export default CartWidget;

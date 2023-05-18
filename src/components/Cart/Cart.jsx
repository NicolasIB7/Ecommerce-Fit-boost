import React, { useContext, useEffect, useState } from "react";
import { contexto } from "../CustomProvider";
import style from "./Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import FormBuy from "./FormBuy";

const Cart = () => {
  const { cart, removeProduct, clearCart } = useContext(contexto);

  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const totalCount = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].count;
    }
    return sum;
  };
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].count * cart[i].product.precio;
    }
    return sum;
  };

  useEffect(() => {
    const calculatedTotal = totalCount();
    const calculatedPrice = totalPrice();
    setTotal(calculatedTotal);
    setPrice(calculatedPrice);
  }, [cart]);

  const handleClear = (e) => {
    e.preventDefault();
    clearCart();
  };

  const handleRemove = (productId) => {
    removeProduct(productId);
  };

  return (
    <div className={style.container}>
      {cart.length > 0 ? (
        < div style={{display:"flex"}}>
        <div className={style.container2}>
          <Button
            onClick={handleClear}
            color='error'
            sx={{backgroundColor:"white"}}
            variant='outlined'
            startIcon={<DeleteIcon />}
            className={style.vaciar}>
            {" "}
            Vaciar carrito
          </Button>

          <div>

          {cart.map((item, index) => (
            <div key={index} className={style.card}>
              <h4>{item.product.nombre}</h4>
              <img
                src={item.product.imagen}
                alt=''
                style={{ width: 150, height: 240 }}
              />
              <h4>Precio: $ {item.product.precio * item.count}</h4>
              <h4 style={{marginTop:"3%", marginBottom:"5%"}}>Cantidad: {item.count} u</h4>
              <Button
                variant='outlined'
                color='error'
                onClick={() => handleRemove(item.product.id)}
                sx={{ marginTop: "3%", marginBottom:"3%" }}>
                Quitar producto del carrito
              </Button>
              
            </div>
          ))}</div>

          
        </div>
        <FormBuy total={total} price={price} />
        </div>
      ) : (
        <div style={{ fontSize: 50, marginTop: "20%", marginBottom: "40%" }}>
          No tienes agregado ningun producto al carrito :(
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useContext } from 'react';
import { contexto } from "../CustomProvider";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import style from "./Cart.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Cart = () => {
  const { cart, removeProduct, clearCart } = useContext(contexto);
  const navigate = useNavigate();

  const handleClear = (e) => {
    e.preventDefault()
    clearCart()
  }

  const handleRemove = (productId) => {
    removeProduct(productId);
  }


  const handleBuy=()=>{
    Swal.fire({
      title: '¿Está seguro que desea realizar la compra?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire('Se realizó tu pedido', 'Muchas gracias por la compra, en minutos te llegará un mail con los detalles de tu pedido.', 'success').then(() => {
          clearCart()
          navigate("/");});
  }})

  }
  return (

    <div className={style.container}>


    {cart.length>0 ? (
      <div className={style.container2}>


      <Button onClick={handleClear} color="error" variant="outlined" startIcon={<DeleteIcon /> } className={style.vaciar}> Vaciar carrito</Button>

      {cart.map((item, index) => (
        <div key={index}>
          <h4>{item.product.nombre}</h4>
          <img src={item.product.imagen} alt="" style={{width:150, height:240}} />
          <h4>Precio: $ {" "} {item.product.precio}</h4>
          <h4>Cantidad: {item.count} unidades</h4>
          <Button variant="outlined" color="error" onClick={() => handleRemove(item.product.id)}>Quitar producto del carrito</Button>
        </div>
      ))}
      <div className={style.compra}>
<Button variant="contained" size="medium" onClick={handleBuy}>Comprar {" "} <LocalMallIcon/></Button>
</div>

      </div>) :

      (<div>No tienes agregado ningun producto al carrito.</div>)}



      
    </div>

  )
}

export default Cart;

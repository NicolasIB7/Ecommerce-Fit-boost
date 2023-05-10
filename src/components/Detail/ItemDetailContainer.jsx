import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
import {contexto} from "../CustomProvider"
import CartWidget from "../CartWidget/CartWidget";

function ItemDetailContainer() {
  const { id } = useParams();
  const {addToCart} = useContext(contexto)

  const [product, setProduct] = useState();

  const handleAdd=(count)=>{
    addToCart(product, count)
    alert("se agrego al carrito")
    //agregar funcionalidad para que pregunte si seguir comprando(te manda a landing) o ir a pagar(te manda al carrito)
  }

  useEffect(() => {
    const filteredProducts = data.filter(
      (product) => product.id === parseInt(id)
    );
    setProduct(filteredProducts[0]);
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h4>{product.nombre}</h4>
          <img src={product.imagen} alt='' />
          <p>{product.descripcion}</p>
          <h3>{product.precio}</h3>
          <CartWidget onAdd={handleAdd} />
        </div>
        
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

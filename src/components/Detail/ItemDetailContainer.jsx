import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";

function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState();

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
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

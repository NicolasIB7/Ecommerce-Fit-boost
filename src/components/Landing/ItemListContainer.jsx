import React, { useEffect, useState } from "react";
import style from "./ItemListContainer.module.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductByCategory } from "../../utils";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  const { id } = useParams();

  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    if (id) {
      getProductByCategory(id)
        .then((res) => {
          setListProducts(res);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      getProducts()
        .then((res) => {
          setListProducts(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div>
      {listProducts.length > 0 ? (
        <div className={style.container}>
          {listProducts.map((product) => (
            <ItemList
              id={product.id}
              nombre={product.nombre}
              imagen={product.imagen}
              descripcion={product.descripcion}
              precio={product.precio}
              categoria={product.categoria}
              stock={product.stock}
            />
          ))}
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15%",
            marginBottom: "30%",
            scale: "1.3",
          }}>
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      )}
    </div>
  );
};

export default ItemListContainer;

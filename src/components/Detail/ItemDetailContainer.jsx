import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { contexto } from "../CustomProvider";
import CartWidget from "../CartWidget/CartWidget";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getProductDetail } from "../../utils";

function ItemDetailContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useContext(contexto);

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleAdd = (count) => {
    Swal.fire({
      title: "¿Está seguro que desea agregar el producto al carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sí, ir al carrito",
      denyButtonText: `Sí, seguir comprando`,
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(product, count);
        Swal.fire("Producto agregado!", "", "success").then(() => {
          navigate("/cart");
        });
      } else if (result.isDenied) {
        addToCart(product, count);
        Swal.fire("Producto agregado", "", "info").then(() => {
          navigate("/");
        });
      }
    });
  };

  useEffect(() => {
    getProductDetail(id).then((res) => {
      setProduct(res);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15%",
            marginBottom: "30%",
            scale: "1.3",
          }}>
          <CircularProgress />
        </Box>
      ) : product ? (
        <div class='containerD'>
          <div class='prod'>
            <h2 class='h2'>{product.nombre}</h2>
            <img src={product.imagen} alt='' class='imagen' />
            <p class='p'>{product.descripcion}</p>
            <h3 class='h3'>$ {product.precio}</h3>
          </div>
          <div class='cart'>
            <CartWidget onAdd={handleAdd} />
          </div>
        </div>
      ) : (
        <div style={{ fontSize: 50, marginTop: "15%", marginBottom: "40%" }}>
          No se encontró el producto.
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;

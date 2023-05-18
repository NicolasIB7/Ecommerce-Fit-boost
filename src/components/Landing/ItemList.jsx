import React from "react";
import { NavLink } from "react-router-dom";
import "./ItemList.css";
import Button from "@mui/material/Button";

const ItemList = (props) => {
  return (
    <div class='cont'>
      <h4>{props.nombre}</h4>
      <img src={props.imagen} alt='' />
      <h3>$ {props.precio}</h3>
      <NavLink to={`/item/${props.id}`}>
        <Button variant='outlined' size='small' sx={{ height: 35, width: 300, color:"#004E64", fontSize:14 }}>
          <p>Ver detalles</p>
        </Button>
      </NavLink>
    </div>
  );
};

export default ItemList;

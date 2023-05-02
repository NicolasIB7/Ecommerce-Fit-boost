import React from "react";
import style from "./ItemList.module.css";
import { NavLink } from "react-router-dom";

const ItemList = (props) => {
  return (
    <div className={style.card}>
      <h4>{props.nombre}</h4>
      <img src={props.imagen} alt='' />
      <h3>{props.precio}</h3>
      <NavLink to={`/item/${props.id}`}>
        <p>Ver detalles</p>
      </NavLink>
    </div>
  );
};

export default ItemList;

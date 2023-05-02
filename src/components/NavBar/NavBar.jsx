import React from "react";
import style from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const handleClick = () => {
    alert("redirigiendo");
  };

  return (
    <div className={style.container}>
      <NavLink to='/'>
        <Avatar
          alt='Fit Boost'
          src='/static/images/avatar/1.jpg'
          sx={{ width: 80, height: 80 }}
        />
      </NavLink>
      <h3>Fit Boost</h3>

      <div className={style.menu}>
        <NavLink to='/category/1'>Suplementos</NavLink>
        <NavLink to='/category/2'>Shakers</NavLink>

        <Button variant='contained' sx={{ marginLeft: 3 }}>
          <NavLink to='/about'>Acerca de nosotros</NavLink>{" "}
        </Button>
        <Button variant='contained' sx={{ marginLeft: 3 }}>
          {" "}
          <NavLink to='/contact'>Contacto</NavLink>{" "}
        </Button>
      </div>
      <NavLink to='/cart'>
        <CartWidget />
      </NavLink>
    </div>
  );
};

export default NavBar;

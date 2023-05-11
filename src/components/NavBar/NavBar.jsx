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
      <NavLink to='/' className={style.logo}>
        <Avatar
          alt='Fit Boost'
          src='https://t4.ftcdn.net/jpg/03/70/09/35/360_F_370093526_mJLYjlxn5Jb2pMsiQeyE7PMMnCp7NY8z.jpg'
          sx={{ width: 80, height: 80 }}
        />
      </NavLink>

      <div className={style.menu}>
      <Button variant='contained' sx={{ marginLeft: 3,  }}>
        <NavLink to='/category/1' style={{textDecoration:"none"}}>Suplementos</NavLink></Button>
        <Button variant='contained' sx={{ marginLeft: 3 }}>
        <NavLink to='/category/2' style={{textDecoration:"none"}}>Shakers</NavLink></Button>

        <Button variant='contained' sx={{ marginLeft: 3 }}>
          <NavLink to='/about' style={{textDecoration:"none"}}>Acerca de nosotros</NavLink>{" "}
        </Button>
        <Button variant='contained' sx={{ marginLeft: 3 }}>
          {" "}
          <NavLink to='/contact' style={{textDecoration:"none"}}>Contacto</NavLink>{" "}
        </Button>
      </div>
      <NavLink to='/cart'>
        <ShoppingCartIcon className={style.cart} />
      </NavLink>
    </div>
  );
};

export default NavBar;



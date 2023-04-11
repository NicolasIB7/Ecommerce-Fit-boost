import React from "react";
import style from "./NavBar.module.css";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartWidget from "../CartWidget/CartWidget";

const NavBar=()=>{

const handleClick=()=>{
  alert("redirigiendo")
}


    return(
        <div className={style.container}>
         <Avatar
        alt="Fit Boost"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80 }}
      />
        <h3>Fit Boost</h3>

        <div className={style.menu}>
        <Button variant="contained" sx={{marginLeft:3}} onClick={handleClick}>Acerca de nosotros</Button>
        <Button variant="contained" sx={{marginLeft:3}} onClick={handleClick}>Contacto</Button>
        <Button variant="contained" sx={{marginLeft:3}} onClick={handleClick}>Preguntas frecuentes</Button>
        </div>
        <CartWidget/>
        
        </div>
    )
}

export default NavBar;
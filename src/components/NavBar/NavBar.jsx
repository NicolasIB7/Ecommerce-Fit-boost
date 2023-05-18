import React from "react";
import style from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartIcon from "../Cart/CartIcon";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.container}>
      <NavLink to='/' className={style.logo}>
        <Avatar
          alt='Fit Boost'
          src='https://t4.ftcdn.net/jpg/03/70/09/35/360_F_370093526_mJLYjlxn5Jb2pMsiQeyE7PMMnCp7NY8z.jpg'
          sx={{ width: 110, height: 110 }}
        />
      </NavLink>

      <div className={style.menu}>
        <Button
          id='demo-positioned-button'
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{backgroundColor:"#398397", color:"white", textDecoration:"none"}}
          >
            
          Categorías
        </Button>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          >
          <MenuItem onClick={handleClose}>
            {" "}
            <NavLink to='/category/2' style={{ textDecoration: "none", color:"black" }}>
              Shakers{" "}
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <NavLink to='/category/1' style={{ textDecoration: "none", color:"black" }}>
              Suplementos
            </NavLink>
          </MenuItem>
        </Menu>

        <Button variant='contained' className={style.button} sx={{ marginLeft: 10, backgroundColor:"#398397" }}>
          <NavLink to='/about' style={{ textDecoration: "none",color:"white"  }}>
            Acerca de nosotros
          </NavLink>{" "}
        </Button>
        <Button variant='contained' className={style.button} sx={{ marginLeft: 3, backgroundColor:"#398397" }}>
          {" "}
          <NavLink to='/contact' style={{ textDecoration: "none", color:"white"  }}>
            Contacto
          </NavLink>{" "}
        </Button>
      </div>
      <NavLink to='/cart'>
        <CartIcon />
      </NavLink>
    </div>
  );
};

export default NavBar;

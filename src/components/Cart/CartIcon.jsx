import React, { useContext, useEffect, useState } from "react";
import { contexto } from "../CustomProvider";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartIcon = () => {
  const { cart } = useContext(contexto);

  const [total, setTotal] = useState(0);

  const totalCount = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].count;
    }
    return sum;
  };

  useEffect(() => {
    const calculatedTotal = totalCount();
    setTotal(calculatedTotal);
  }, [cart]);

  return (
    <IconButton
      aria-label='cart'
      sx={{ marginRight: 10, marginTop: 5, scale: "1.4", color: "white" }}>
      <StyledBadge badgeContent={total} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;

import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";

import { CartContext } from "../../store/CartContext";

function HeaderCartButton(props) {
  const { cartItemsAmount, setCartItemsAmount } = useContext(CartContext);
  // const cartCtx = useContext(cartcontext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
}

export default HeaderCartButton;

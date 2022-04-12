import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Cart from "../Cart/Cart";

function HeaderCartButton(props) {
  const handleSubmit = () => {
    console.log("pigaine stin selida");
    return <Cart />;
  };

  return (
    <button className={classes.button} onClick={handleSubmit}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{props.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;

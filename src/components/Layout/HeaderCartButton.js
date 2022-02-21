import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton(props) {
  const handleSubmit = () => {
    console.log("pigaine stin selida");
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

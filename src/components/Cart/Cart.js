import React from "react";
import classes from "./../Meals/MealsItem.module.css";
import { useSelector } from "react-redux";

function Cart(props) {
  const cart = useSelector((state) => state.shop.cart);
  console.log(cart);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </li>
  );
}

export default Cart;

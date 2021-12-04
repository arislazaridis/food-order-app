import React from "react";
import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const { cartItemsAmount, setCartItemsAmount } = useContext(CartContext);
  const addToCartHandler = (amount) => {
    const addItem = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };

    console.log(addItem);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;

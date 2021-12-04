import React, { useRef, useEffect, useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { CartContext } from "../../store/CartContext";
function MealItemForm(props) {
  const amountInputRef = useRef(null);
  const { cartItemsAmount, setCartItemsAmount } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // console.log(enteredAmount);
    setCartItemsAmount(enteredAmount);

    props.onAddtoCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;

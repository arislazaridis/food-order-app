import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { ADD_TO_CART, ADJUST_QTY } from "../../models/Shopping/shopping-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../models/Shopping/shopping-actions";

function MealItemForm(props) {
  const amountInputRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    // setCartItemsAmount(enteredAmount);
    props.onAddtoCart(enteredAmount, id);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button
        type="submit"
        onClick={() => dispatch(addToCart(id, amountInputRef.current.value))}
      >
        + Add
      </button>
    </form>
  );
}

export default MealItemForm;

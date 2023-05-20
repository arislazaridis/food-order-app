import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import { addToCart } from "../../models/Shopping/shopping-actions";
import { useSelector } from "react-redux";

function MealItemForm(props) {
  const amountInputRef = useRef(null);
  const dispatch = useDispatch();
  const { id, qty } = props;

  const cart = useSelector((state) => state.shop.cart);

  let cartQty = 0;
  for (let i in cart) {
    cartQty = cartQty + cart[i].qty;
  }

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
          defaultValue: qty ? qty : 0,
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

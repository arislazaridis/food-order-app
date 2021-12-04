import React, { useState } from "react";
import classes from "./Input.module.css";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Input = React.forwardRef((props, ref) => {
  const [itemsCart, setItemsCart] = useState();

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        onChange={(e) => setItemsCart(e.target.value)}
        ref={ref}
      />
    </div>
  );
});
export default Input;

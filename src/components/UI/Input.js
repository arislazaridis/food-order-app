import React, { useState } from "react";
import classes from "./Input.module.css";
import { useSelector } from "react-redux";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        // onChange={(e) => console.log(e.target.value)}
        ref={ref}
      />
    </div>
  );
});

export default Input;

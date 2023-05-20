import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import { addToCart } from "../../models/Shopping/shopping-actions";

function MealItem(props) {
  //function to add item
  const addToCartHandler = (amount, id) => {};

  return (
    <li className={classes.meal}>
      <div>
        <img src={props.image} width="150" height="100"></img>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm
          onAddtoCart={addToCartHandler}
          id={props.id}
          qty={props.qty}
        />
      </div>
    </li>
  );
}

export default MealItem;

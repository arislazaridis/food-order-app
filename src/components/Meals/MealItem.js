import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import { addToCart } from "../../models/Shopping/shopping-actions";

function MealItem(props) {
  //function to add item
  const addToCartHandler = (amount, id) => {
    console.log(amount);
    console.log(id, amount);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;

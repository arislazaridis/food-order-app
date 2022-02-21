import classes from "./MealsItem.module.css";

import MealItemForm from "./MealItemForm";
import { connect } from "react-redux";
import { setCartData } from "../../models/cart/actions";

function MealItem(props) {
  // const price = `$${props.price.toFixed(2)}`;
  const { setCartData } = props;

  //function to add item

  const addToCartHandler = (amount) => {
    setCartData({
      itemName: props.name,
      itemAmount: parseInt(amount),
      itemPrice: props.price,
    });
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

const mapStateToProps = (state) => {
  return {
    itemId: state.cart.cartData.id,
    itemName: state.cart.cartData.name,
    itemAmount: state.cart.cartData.amount,
    itemDescription: state.cart.cartData.description,
    itemPrice: state.cart.cartData.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setCartData: (payload) => dispatch(setCartData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);

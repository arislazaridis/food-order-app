import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";
import { addToCart } from "../../models/Shopping/shopping-actions";

function MealItem(props) {
  // const price = `$${props.price.toFixed(2)}`;
  // const {} = props;
  // const {
  //   setCartData,
  //   setCartTotalAmount,
  //   itemId,
  //   itemName,
  //   itemAmount,
  //   itemDescription,
  //   itemPrice,
  //   totalAmount,
  // } = props;

  //function to add item
  const addToCartHandler = (amount, id) => {
    console.log(amount);

    // setCartData({
    //   itemName: props.name,
    //   itemAmount: parseInt(amount),
    //   itemPrice: props.price,
    // });
    // setCartTotalAmount(amount);
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

// const mapStateToProps = (state) => {
//   return {
//     itemId: state.cartData.itemId,
//     itemName: state.cartData.itemName,
//     itemAmount: state.cartData.itemAmount,
//     itemDescription: state.cartData.itemDescription,
//     itemPrice: state.cartData.itemPrice,
//     totalAmount: state.cartTotalAmount.totalAmount,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     setCartData: (payload) => dispatch(setCartData(payload)),
//     setCartTotalAmount: (payload) => dispatch(setCartTotalAmount(payload)),
//   };
// };

//connect(mapDispatchToProps, mapStateToProps)
export default MealItem;

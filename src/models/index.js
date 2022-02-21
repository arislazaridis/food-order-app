import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";

export const RootReducer = combineReducers({
  cart: cartReducer,
});

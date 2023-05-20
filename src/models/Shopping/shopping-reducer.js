import * as actionTypes from "./shopping-types";
import { PAGES } from "../../config/config";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
  page: PAGES.HomePage,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod._id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item._id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.id
                ? {
                    ...item,
                    qty: Number(action.payload.qty),
                  }
                : item
            )
          : [...state.cart, { ...item, qty: Number(action.payload.qty) }],
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.GO_TO_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case actionTypes.TOTAL_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

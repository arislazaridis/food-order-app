import * as actionTypes from "./shopping-types";
import { PAGES } from "../../config/config";
import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  products: [], // {id,title,descr,price,img,qty}
  cart: [], // {id,title,descr,price,img,qty}
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

    case actionTypes.GO_TO_PAGE:
      return {
        ...state,
        page: action.payload,
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

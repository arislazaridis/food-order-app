import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      img: "https://freepikpsd.com/file/2019/10/sushi-empanizado-png-4-1-Transparent-Images-Free.png",
      qty: 0,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      img: "https://www.picng.com/upload/schnitzel/png_schnitzel_16034.png",
      qty: 0,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      img: "https://www.seekpng.com/png/full/79-791680_bbq-burger-png-burger-king-bacon-king.png",
      qty: 0,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      img: "https://i.dlpng.com/static/png/6943851_preview.png",
      qty: 0,
    },
  ], // {id,title,descr,price,img}
  cart: [], // {id,title,descr,price,img,qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      console.log(state.cart);
      // check if item is in cart already
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: Number(action.payload.qty),
                  }
                : item
            )
          : [...state.cart, { ...item, qty: Number(action.payload.qty) }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
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

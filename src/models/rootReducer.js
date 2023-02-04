import { combineReducers } from "redux";

import shopReducer from "./Shopping/shopping-reducer";
import { formReducer } from "./sign-forms/reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  signForms: formReducer,
});

export default rootReducer;

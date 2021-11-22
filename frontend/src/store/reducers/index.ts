import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  general: GeneralReducer,
  products: ProductReducer,
  cart: CartReducer,
});

import { combineReducers } from "redux";
import { productReducer, seletedProductsReducer } from "./productReducer";

const reducers = combineReducers({
    allproducts : productReducer,
    product: seletedProductsReducer
});

export default reducers;
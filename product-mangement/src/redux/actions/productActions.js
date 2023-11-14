import { ActionType } from "../constants/action-type";

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload : products
    };
};
export const seletedProducts = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCTS,
        payload : product
    };
};

export const removeSeletedProducts = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCTS,
    };
};
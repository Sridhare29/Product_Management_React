import { ActionType } from "../constants/action-type";

const initialState = {
    products : [{
        id : 1,
        Name : "sridhar",
        category : "Programmer"
    }]
};
export const productReducer =(state = initialState, {type, payload}) => {
        switch (type) {
            case ActionType.SET_PRODUCTS:
                return state;
        
            default:
                return state;
        }
};
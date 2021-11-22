import * as actionType from "../types";

export const INITIAL_STATE = {
    count: 0,
    cartItems: [],
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionType.SET_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
}

export default reducer;
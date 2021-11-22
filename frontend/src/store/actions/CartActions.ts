import * as actionTypes from "../types";

export const setCount = (value: any) => {
    return {
        type: actionTypes.SET_COUNT,
        payload: value,
    };
};

export const setCartItems = (value: any) => (dispatch: any) => {
    console.log("entro aca", value)
    dispatch({
        type: actionTypes.SET_CART_ITEMS,
        payload: value,
    });
};
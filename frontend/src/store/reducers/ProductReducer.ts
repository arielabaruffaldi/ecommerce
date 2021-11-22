import * as actionType from "../types";

export const INITIAL_STATE = {
    products: [],
    productDetail: []
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS:
            return { ...state, products: action.payload };
        case actionType.GET_PRODUCT:
            return { ...state, productDetail: action.payload }
        default:
            return state;
    }
}

export default reducer;
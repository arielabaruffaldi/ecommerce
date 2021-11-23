import * as actionType from "../types";

export const INITIAL_STATE = {
    id: null,
    items: []
}


const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionType.SET_ID:
            return {
                ...state,
                id: action.payload
            }
        case actionType.SET_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;
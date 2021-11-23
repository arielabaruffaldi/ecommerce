import { Product } from "../../interfaces/products";
import * as actionTypes from "../types";
import { http } from "../../utils/axios";
import { State } from "../../interfaces/state";

export const setCartId = () => async (dispatch: any) => {
    const { data: { cartId } } = await http.post("/carrito")
    console.log("cartId", cartId)
    dispatch({
        type: actionTypes.SET_ID,
        payload: cartId,
    });

}

export const setCartItems = (value: Product) => async (dispatch: any, getState: any) => {
    const { cart } = getState();
    console.log("cart", cart)
    console.log("value", value)
    try {
        const res = await http.post(`carrito/${cart.id}/productos`, { products: [value.id] })
        console.log(res)
        dispatch({
            type: actionTypes.SET_CART,
            payload: value,
        });
    } catch (err) {
        console.log("err", err)
    }

};

/* export const deleteItemInCart = (id_cart: string, id_prod: string) => async (dispatch: any) => {
    const data = await http.delete(`carrito/${id_cart}/${id_prod}`)
    console.log("data", data)
}; */
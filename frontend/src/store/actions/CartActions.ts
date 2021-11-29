import { Product } from "../../interfaces/products";
import * as actionTypes from "../types";
import { http } from "../../utils/axios";

export const getCart = () => async (dispatch: any) => {
    const { data: { cartId } } = await http.post("/carrito")
    dispatch({
        type: actionTypes.SET_ID,
        payload: cartId,
    });
}


export const setCartId = () => async (dispatch: any) => {
    const { data: { cartId } } = await http.post("/carrito")
    dispatch({
        type: actionTypes.SET_ID,
        payload: cartId,
    });
}

export const setCartItems = (value: Product) => async (dispatch: any, getState: any) => {
    const { cart } = getState();
    const itemInCart = cart?.products.find((item: Product) => item.id === value.id)
    if (!itemInCart) {
        const { data: { products: updatedCart } } = await http.post(`carrito/${cart.id}/productos`, { products: [value] })
        dispatch({
            type: actionTypes.SET_CART,
            payload: updatedCart,
        });
    } else {
        //agregar al carrito más unidades del item
        console.log("ya está en el carrito")
    }
};

export const deleteItemInCart = (id_cart: number, id_prod: number) => async (dispatch: any) => {
    const { data: { products } } = await http.delete(`carrito/${id_cart}/productos/${id_prod}`)
    dispatch({
        type: actionTypes.SET_CART,
        payload: products,
    });
};
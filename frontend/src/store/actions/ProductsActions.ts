import * as actionTypes from "../types";
import { http } from "../../utils/axios";
import { setLoading, setError } from "./GeneralActions";

export const getProducts = (query: string | undefined) => async (
    dispatch: any
) => {
    dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: []
    })
    dispatch(setLoading(true))
    dispatch(setError({
        error: false,
        errorMessage: ""
    }))
    const queryParams = query ? `?q=${query}` : "";
    const { data } = await http.get(`/productos/${queryParams}`);
    console.log("data", data)
    dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: data
    })
    // // si la api me devuelve un array vacío seteo el mensaje de error
    // if (!data.items?.length) {
    //     dispatch(setError({
    //         error: true,
    //         errorMessage: "No encontramos productos que coincidan con tu búsqueda."
    //     }))
    // }
    // dispatch(setLoading(false))
}

export const getProductById = (id: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    dispatch({
        type: actionTypes.GET_PRODUCT,
        payload: {}
    })
    const { data } = await http.get(`/productos/${id}`);
    dispatch({
        type: actionTypes.GET_PRODUCT,
        payload: data
    })
    dispatch(setLoading(false))
}
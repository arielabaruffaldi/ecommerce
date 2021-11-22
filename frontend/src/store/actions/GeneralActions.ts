import * as actionTypes from "../types";

export const setLoading = (value: any) => {
    return {
        type: actionTypes.LOADING,
        payload: value,
    };
};

export const setError = (value: any) => {
    return {
        type: actionTypes.ERROR,
        payload: value,
    };
};
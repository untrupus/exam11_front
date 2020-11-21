import {push} from "connected-react-router";

import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
} from "../actionTypes";

import axiosAPI from "../../axiosAPI";

const fetchProductsSuccess = value => {
    return {type: FETCH_PRODUCTS_SUCCESS, value};
};

const fetchProductsError = error => {
    return {type: FETCH_PRODUCTS_ERROR, error};
};

export const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("posts");
            dispatch(fetchProductsSuccess(response.data));
        } catch (e) {
            dispatch(fetchProductsError(e));
        }
    };
};

const addProductError = error => {
    return {type: ADD_PRODUCT_ERROR, error};
};

export const addProduct = (data) => {
    return async (dispatch, getState) => {
        const headers = {
            "Authorization": getState().users.user && getState().users.user.user.token
        };
        try {
            await axiosAPI.post('/products', data, {headers});
            dispatch(addProductError(null));
            dispatch(push("/"));
        } catch (e) {
            dispatch(addProductError(e.response.data));
        }
    };
};
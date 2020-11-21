import {push} from "connected-react-router";

import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_ERROR,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from "../actionTypes";

import axiosAPI from "../../axiosAPI";

const fetchProductsSuccess = value => {
    return {type: FETCH_PRODUCTS_SUCCESS, value};
};

const fetchProductsError = error => {
    return {type: FETCH_PRODUCTS_ERROR, error};
};

export const fetchProducts = (cat) => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("products?category=" + cat);
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

const fetchProductSuccess = value => {
    return {type: FETCH_PRODUCT_SUCCESS, value};
};

const fetchProductError = error => {
    return {type: FETCH_PRODUCT_ERROR, error};
};

export const fetchProduct = (id) => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("products/" + id);
            dispatch(fetchProductSuccess(response.data));
        } catch (e) {
            dispatch(fetchProductError(e));
        }
    };
};
const deleteProductError = error => {
    return {type: DELETE_PRODUCT_ERROR, error};
};

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const headers = {
            "Authorization": getState().users.user && getState().users.user.user.token
        };
        try {
            await axiosAPI.delete("products/" + id, {headers});
            dispatch(push("/"));
        } catch (e) {
            dispatch(deleteProductError(e));
        }
    }
}
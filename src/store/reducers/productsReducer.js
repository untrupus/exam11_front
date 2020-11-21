import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_ERROR,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from "../actionTypes";

const initialState = {
    products: [],
    singleProduct: null,
    singleProductError: null,
    addProductError: null,
    deleteError: null,
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.value};
        case FETCH_PRODUCTS_ERROR:
            return {...state, error: action.error};
        case ADD_PRODUCT_ERROR:
            return {...state, addProductError: action.error};
        case FETCH_PRODUCT_SUCCESS:
            return {...state, singleProduct: action.value};
        case FETCH_PRODUCT_ERROR:
            return {...state, singleProductError: action.error};
        case DELETE_PRODUCT_ERROR:
            return {...state, deleteError: action.error};
        default:
            return state;
    }
};

export default productsReducer;
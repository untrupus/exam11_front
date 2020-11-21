import {

} from "../actionTypes";

const initialState = {
    products: [],
    singleProduct: {},
    singleProductError: null,
    addProductError: null,
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default productsReducer;
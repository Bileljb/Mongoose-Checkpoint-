import { GET_PRODUCT, GET_PRODUCTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../Types/ProductTypes";
const initialState = {
    products: [],
    edit: false,
    product: null
};

const ProductReducers = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_PRODUCTS:
            return {...state, products: payload.Products}

        case TOGGLE_TRUE:
            return {...state, edit: true}

        case TOGGLE_FALSE:
            return {...state, edit: false}

        case GET_PRODUCT:
            return {...state, product: payload.FoundProduct }

        default:
            return state;
    }
};
export default ProductReducers
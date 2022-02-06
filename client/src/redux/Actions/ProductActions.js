import { GET_PRODUCT, GET_PRODUCTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../Types/ProductTypes"
import axios from 'axios'
export const get_products = () => async (dispatch) => {
    try {
        const res = await axios.get("/products")
        console.log(res)
        dispatch(
            {
                type: GET_PRODUCTS,
                payload: res.data
            });
    } catch (error) {
        console.log(error)
    }
}
export const addproduct= (newproduct)=> async(dispatch)=>{
    try {
        await axios.post("products/addProduct/", newproduct)
        dispatch(get_products())
    } catch (error) {
        console.log(error)
    }
}

export const deleteproduct = (id) => async(dispatch)=>{

    try {
        await axios.delete(`/products/${id}`)
        dispatch(get_products)
    } catch (error) {
        console.log(error)
    }
}

export const editproduct = (id, data)=> async(dispatch)=>{
    try {
        await axios.put(`/products/${id}`, data)
        dispatch(get_products())
    } catch (error) {
        console.log(error)
    }
}

export const togglefalse = ()=>{
    return {type: TOGGLE_FALSE}
}

export const toggletrue = ()=>{
    return {type: TOGGLE_TRUE}
}

export const getoneproduct =(id)=> async(dispatch)=>{
    try {
        const res = await axios.get(`/products/${id}`)
        dispatch({type: GET_PRODUCT, payload: res.data})
    } catch (error) {
        console.log(error)
    }

}
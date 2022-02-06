import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { get_products } from '../redux/Actions/ProductActions';
import { useEffect } from 'react';
import CardProduct from './CardProduct';
function List() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_products())
  }, [])
  const products = useSelector((state) => state.ProductReducers.products)

  return <div style={{display: 'flex', justifyContent: "space-around" , flexWrap: "wrap" }}>
    
    {products.map((product)=> (<CardProduct product = {product} key={product._id} />))}
  </div>;
}

export default List;

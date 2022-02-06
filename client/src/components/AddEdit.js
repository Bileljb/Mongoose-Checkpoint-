import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { addproduct, editproduct } from '../redux/Actions/ProductActions';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

function AddEdit() {

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [rate, setRate] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const edit = useSelector((state) => state.ProductReducers.edit)
    const product = useSelector((state) => state.ProductReducers.product)

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addproduct({ brand, name, price, rate }))
        navigate('/list')
    }
    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(editproduct(product._id, {brand, name, price, rate}))
        navigate('/list')
    }
    useEffect(() => {
        if (edit) {
            setBrand(product.brand);
            setName(product.name);
            setPrice(product.price);
            setRate(product.rate)
        }
        else { setBrand(''); setName(''); setPrice(''); setRate('') }
    }, [product])
    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicBrand">
                <Form.Label>Brand</Form.Label>
                <Form.Control onChange={(e) => setBrand(e.target.value)} value={brand} type="brand" placeholder="Enter Brand" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="name" placeholder="Enter the phone name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRate">
                <Form.Label>Rate</Form.Label>
                <Form.Control onChange={(e) => setRate(e.target.value)} value={rate} type="rate" placeholder="Enter the phone Rate" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} type="price" placeholder="Enter the phone name" />
            </Form.Group>
            {edit && edit ? (<Button variant="primary" onClick={handleEdit} >
                Edit Product
            </Button>) : (<Button variant="primary" onClick={handleAdd}>
                Add New Phone
            </Button>)


            }

        </Form>
    </div>;
}

export default AddEdit;

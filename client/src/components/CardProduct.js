import React from 'react';
import {Card, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteproduct, getoneproduct, toggletrue } from '../redux/Actions/ProductActions';

function CardProduct({product}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = ()=>{
        if (window.confirm('Are you sure'))
        dispatch(deleteproduct(product._id))
    }
    return <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Brand: {product.brand}
                </Card.Text>
                <Card.Text>
                    Price: {product.price}
                </Card.Text>
                <Card.Text>
                    Rate: {product.rate}
                </Card.Text>
                <Button variant="primary" onClick={()=> {dispatch(toggletrue()); navigate('/form'); dispatch(getoneproduct(product._id))}} >Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Body>
        </Card>
    </div>;
}

export default CardProduct;

import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { togglefalse } from '../redux/Actions/ProductActions';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch()
  return <div>
      <Link to='/list'> <Button>Products</Button> </Link>
      <Link to='/form'> <Button onClick={()=>dispatch(togglefalse())}>Add New Products</Button> </Link>
  </div>;
}

export default Home;

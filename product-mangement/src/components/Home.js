import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const Home = () => {
  const products = useSelector((state)=> state);
  const dispatch = useDispatch();
  const fetchProuct = async () => {
      const response = await axios.get("https://localhost:7014/api/Product/GetAll").catch((err)=>{
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));

  };
useEffect(()=>{
  fetchProuct();
},[]);
  console.log("products: ",products);
  return (
    <div className='ui grid container'>
      <br/>
      <ProductComponent/>
    </div>
  )
}

export default Home
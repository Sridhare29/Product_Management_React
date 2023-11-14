import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { seletedProducts } from '../redux/actions/productActions';

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const {productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProuctDetails = async () => {
    const response = await axios
    .get(`https://localhost:7014/api/Product/Get/${productId}`)
    .catch((err) => {
      console.log("Err", err);
    });

    dispatch(seletedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProuctDetails();
    }
  }, [productId]);
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails;
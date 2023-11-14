import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { seletedProducts } from '../redux/actions/productActions';

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { name, productImageUrl, description, price, category } = product;
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://localhost:7014/api/Product/Get/${productId}`);
      dispatch(seletedProducts(response.data));
    } catch (err) {
      console.log('Error', err);
    }
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetails();
    }
  }, [productId, dispatch]);

  return (
    <div className="container mt-5">
      {Object.keys(product).length === 0 ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={productImageUrl}
                className="img-fluid"
                alt={name}
                style={{ padding: '10px', height: '100%' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <h6>
                  <span >MRP {price}<br/>(Incl. of all taxes)</span>
                </h6>
                <h3 className="card-text">
                  <small className="text-muted">{category}</small>
                </h3>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary rounded-3">
                  <i className="shop icon"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

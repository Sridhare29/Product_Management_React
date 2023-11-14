import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products);

  const renderList = products.map((product) => {
    const { id, name, productImageUrl, description, price, category } = product;

    return (
      <div className='col-md-3 mb-4' key={id}>
        <Link to={`/product/${id}`}>
        <div className='card h-100'>
          <img
            src={productImageUrl}
            alt={name}
            className='card-img-top'
            style={{ objectFit: 'cover', height: '200px' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>Rs: {price}</p>
            <p className='card-text'><b>{category.name}</b></p>
            {/* <button className='btn btn-primary'>Buy</button> */}
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <div className='row'>{renderList}</div>;
}

export default ProductComponent;

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
            style={{ objectFit: 'cover', height: '200px',padding: '10px' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text text-secondary'>{description}</p>
            <h6 className='card-text'>₹{price}</h6>
            <p className='card-text text-secondary'><b>{category.name}</b></p>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <div className='row'>{renderList}</div>;
}

export default ProductComponent;

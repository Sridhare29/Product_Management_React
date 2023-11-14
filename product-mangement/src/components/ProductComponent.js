import React from 'react';
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products);

  const renderList = products.map((product) => {
    const { id, name, productImageUrl, description, price, category } = product;

    return (
      <div className='col-md-3 mb-4' key={id}>
        <div className='card'>
          <div className='image'>
            <img
              src={productImageUrl}
              alt={name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className='content' style={{ padding: '1rem' }}>
            <div className='header'>{name}</div>
            <div className='meta price'>Rs: {price}</div>
            <div className='meta'><b>{category.name}</b></div>
            <button className='btn btn-primary mt-2'>Buy</button>
          </div>
        </div>
      </div>
    );
  });

  return <div className='row'>{renderList}</div>;
}

export default ProductComponent;

import React from 'react';
import { useSelector } from 'react-redux';

function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products);
  const { id, Name } = products[0];

  return (
    <div className='four column wide'>
    <div className='ui link cards'>
      <div className='card'>
        <div className='image'></div>
        <div className='content'>
          <div className='header'>{Name}</div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default ProductComponent;

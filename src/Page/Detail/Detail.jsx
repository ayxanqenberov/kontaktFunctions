import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { productId } = useParams(); 

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default Detail;

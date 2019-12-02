import React from "react";
const SingleProduct = props => {
  const product = props.product;
  return (
    <div>
      <h1>{product.name}</h1>
      <span>{product.price}</span>
    </div>
  );
};

export default SingleProduct;

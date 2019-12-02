import React from "react";

const SingleProduct = props => {
  const product = props.product;
  return (
    <div className="row">
      <div className="col-sm-8">
        <h3>{product.name}</h3>
      </div>
      <div className="col-sm-4">
        <button className="btn btn-success">Add To Cart</button>
        <span className="float-right">{product.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;

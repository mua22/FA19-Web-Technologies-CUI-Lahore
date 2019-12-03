import React from "react";

const SingleProduct = props => {
  return (
    <div className="row" style={{ borderBottom: "2px dashed blue" }}>
      <div className="col-sm-10">
        <h3>{props.product.name}</h3>
      </div>
      <div className="col-sm-2">
        {props.product.price}
        <br />
        <button className="btn btn-info btn-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;

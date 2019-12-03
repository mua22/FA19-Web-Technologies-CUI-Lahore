import React from "react";
const ProductSummary = props => {
  return (
    <div
      className="row"
      style={{ borderBottom: "2px dashed blue", bottomMargin: "10px" }}
    >
      <div className="col-sm-10">{props.product.name}</div>
      <div className="col-sm-2">{props.product.price}</div>
    </div>
  );
};

export default ProductSummary;

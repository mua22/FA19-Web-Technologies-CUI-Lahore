import React from "react";
import axios from "axios";
const ProductSummary = props => {
  return (
    <div
      className="row"
      style={{ borderBottom: "2px dashed blue", bottomMargin: "10px" }}
    >
      <div className="col-sm-10">{props.product.name}</div>
      <div className="col-sm-2">
        {props.product.price}
        <button
          className="btn btn-danger float-right btn-sm"
          onClick={e => {
            axios
              .delete("http://localhost:4000/api/products/" + props.product._id)
              .then(res => {
                console.log("deleted");
                props.onProductDelete();
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductSummary;

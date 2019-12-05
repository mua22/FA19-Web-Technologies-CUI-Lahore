import React from "react";
import axios from "axios";
const SingleProduct = props => {
  return (
    <div
      className="row"
      style={{ borderBottom: "2px dashed blue", marginBottom: "10px" }}
    >
      <div className="col-sm-10">
        <h3>{props.product.name}</h3>
      </div>
      <div className="col-sm-2">
        {props.product.price}
        <br />
        <button
          className="btn btn-danger btn-sm"
          onClick={e => {
            axios
              .delete("http://localhost:4000/api/products/" + props.product._id)
              .then(res => {
                console.log("deleted");
                props.onProductDelete();
              });
          }}
        >
          Del
        </button>
        <button className="btn btn-info btn-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;

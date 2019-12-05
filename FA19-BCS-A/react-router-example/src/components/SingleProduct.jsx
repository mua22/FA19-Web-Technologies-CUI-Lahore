import React from "react";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
const SingleProduct = props => {
  const product = props.product;
  return (
    <div
      style={{
        borderBottom: "2px dashed blue",
        marginBottom: "20px",
        overflow: "hidden"
      }}
    >
      <h1>{product.name}</h1>
      <span>{product.price}</span>
      <button
        className="btn btn-danger float-right"
        onClick={e => {
          axiosInstance
            .delete("http://localhost:4000/api/products/" + props.product._id)
            .then(res => {
              console.log("deleted");
              props.onProductDeleted();
            });
          console.log(props.product.name + " Delting");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleProduct;

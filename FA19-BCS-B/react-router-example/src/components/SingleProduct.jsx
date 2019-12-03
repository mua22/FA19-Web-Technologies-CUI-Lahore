import React from "react";
import axios from "axios";
const SingleProduct = props => {
  const product = props.product;
  const handleDelete = id => {
    axios.delete("http://localhost:4000/api/products/" + id).then(res => {
      console.log("deleted");
      props.onDeleted(props.product.name);
    });
  };
  return (
    <div className="row">
      <div className="col-sm-8">
        <h3>{product.name}</h3>
      </div>
      <div className="col-sm-4">
        <button
          className="btn btn-danger btn-sm"
          onClick={e => handleDelete(product._id)}
        >
          X Delete
        </button>
        <button className="btn btn-success">Add To Cart</button>
        <span className="float-right">{product.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;

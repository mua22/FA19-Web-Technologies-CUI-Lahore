import React from "react";
import { Link } from "react-router-dom";
const NewProduct = () => {
  return (
    <div>
      <h3>Add new product</h3>
      Name: <input type="text" /> <br />
      Price: <input type="text" />
      <hr />
      <button className="btn btn-info btn-sm">Save</button>
      <Link to="/products" className="btn btn-success btn-sm">
        Cancel
      </Link>
    </div>
  );
};

export default NewProduct;

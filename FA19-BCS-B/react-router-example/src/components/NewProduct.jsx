import React from "react";
const NewProduct = () => {
  return (
    <div className="row1">
      <h1>Add New Product Form</h1>
      Name: <input type="text" /> <br />
      Price: <input type="text" />
      <hr />
      <button className="btn btn-info btn-sm">Create</button>
    </div>
  );
};

export default NewProduct;

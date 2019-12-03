import React from "react";
import axiosInstance from "../utils/axiosInstance";

const NewProduct = props => {
  console.log(props);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const handleFormSubmit = e => {
    axiosInstance
      .post("http://localhost:4000/api/products", {
        name,
        price
      })
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      });
  };
  return (
    <div className="row1">
      <h1>Add New Product Form</h1>
      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />{" "}
      <br />
      Price:{" "}
      <input
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <hr />
      name: {name}, price:{price}
      <hr />
      <button className="btn btn-info btn-sm" onClick={handleFormSubmit}>
        Create
      </button>
    </div>
  );
};

export default NewProduct;

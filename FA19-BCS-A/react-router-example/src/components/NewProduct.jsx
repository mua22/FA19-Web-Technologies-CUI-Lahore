import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const NewProduct = props => {
  console.log(props);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("20");
  const handleNameOnChange = e => {
    setName(e.target.value);
    // setPrice(e.target.value);
  };
  const handleSave = e => {
    axios
      .post("http://localhost:4000/api/products", { name, price })
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      });
  };
  return (
    <div>
      <h3>Add new product</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          aria-describedby="nameHelp"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameOnChange}
        />
        <small id="nameHelp" className="form-text text-muted">
          This is PRoductName
        </small>
      </div>
      <select value={price} onChange={e => setPrice(e.target.value)}>
        <option value="10">Ten</option>
        <option value="20">Twenty</option>
        <option value="50">Pachas</option>
      </select>
      <hr />
      <button className="btn btn-info btn-sm" onClick={handleSave}>
        Save
      </button>
      <Link to="/products" className="btn btn-success btn-sm">
        Cancel
      </Link>
      Name: {name}, price:{price}
    </div>
  );
};

export default NewProduct;

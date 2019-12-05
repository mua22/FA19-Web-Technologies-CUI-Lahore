import React from "react";
import axios from "axios";
const CreateProduct = props => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("10");
  const handleSaveBtnClick = e => {
    axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(
      "token"
    );
    axios
      .post("http://localhost:4000/api/products", { name, price })
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      });
  };

  return (
    <div>
      <h3>Add Nw Prodct</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameId"
          placeholder=""
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <small id="nameId" className="form-text text-muted">
          Write Name of the product
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <select
          className="form-control"
          value={price}
          id="price"
          onChange={e => setPrice(e.target.value)}
        >
          <option value="10">Ten</option>
          <option value="20">Twenty</option>
          <option value="100">Hundred</option>
        </select>
      </div>
      Name: {name} :: price: {price}
      <button className="btn btn-info btn-sm" onClick={handleSaveBtnClick}>
        Save
      </button>
    </div>
  );
};

export default CreateProduct;

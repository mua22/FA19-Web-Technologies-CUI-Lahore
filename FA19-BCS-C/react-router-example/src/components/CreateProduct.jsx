import React from "react";
import axios from "axios";
const CreateProduct = props => {
  const [name, setName] = React.useState("pen");
  const [price, setPrice] = React.useState("");
  console.log(props);
  const handleSave = e => {
    axios
      .post("http://localhost:4000/api/products", { name, price })
      .then(res => {
        console.log(res.data);
        props.history.push("/");
      });
  };
  const handleCancel = e => {
    console.log("cancel clicked");
    props.history.push("/");
    // console.log(e);
  };
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          aria-describedby="nameHelpId"
          placeholder="Name of the Product"
        />
        <small id="nameHelpId" className="form-text text-muted">
          You entered: {name}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          className="form-control"
          value={price}
          onChange={e => setPrice(e.target.value)}
          name="price"
          id="price"
          aria-describedby="priceHelp"
          placeholder="Enter Price"
        />
        <small id="priceHelp" className="form-text text-muted">
          Price
        </small>
      </div>
      <button className="btn btn-info btn-sm" onClick={handleSave}>
        Create Product
      </button>
      <button className="btn btn-info btn-sm" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default CreateProduct;

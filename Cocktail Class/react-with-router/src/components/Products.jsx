import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Products = props => {
  console.log(props);
  React.useEffect(() => {
    // console.log("Sending Axios Get");
    loadData();
  }, []);
  const loadData = () => {
    axios.get("http://localhost:4000/api/products").then(res => {
      setProducts(res.data);
      // console.log(res.data);
    });
  };
  const handleAddNewClick = e => {
    console.log("Add btn clicked");
    props.history.push("/products/new");
  };
  const [products, setProducts] = React.useState([]);
  return (
    <div>
      <h1>All Products</h1>
      <button className="btn btn-success" onClick={handleAddNewClick}>
        Add New
      </button>
      {products.map((p, index) => (
        <SingleProduct key={index} product={p} onProductDelete={loadData} />
      ))}
    </div>
  );
};

export default Products;

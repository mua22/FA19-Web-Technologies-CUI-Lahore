import React from "react";
import ProductSummary from "./ProductSummary";
import axios from "axios";
import { tsPropertySignature } from "@babel/types";
const Products = props => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    console.log("Mounted");
    loadData();
  }, []);
  const loadData = () => {
    axios.get("http://localhost:4000/api/products").then(res => {
      console.log(res.data);
      setProducts(res.data);
    });
  };
  return (
    <React.Fragment>
      <h3>All Products</h3>
      <button
        className="btn btn-success"
        onClick={e => props.history.push("/products/create")}
      >
        Add New
      </button>
      {products.map((p, index) => (
        <ProductSummary key={index} product={p} onProductDelete={loadData} />
      ))}
    </React.Fragment>
  );
};

export default Products;

import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  //   const products = [
  //     { name: "Lenovo", price: "50" },
  //     { name: "Lenovo1", price: "501" }
  //   ];
  const loadData = () => {
    console.log("Loading Products");
    axios.get("http://localhost:4000/api/products").then(res => {
      //   console.log(res.data);
      setProducts(res.data);
    });
  };
  React.useEffect(() => {
    loadData();
  }, []);
  const handleDeletedEvent = name => {
    console.log("A child is deleted: " + name);
    loadData();
  };
  return (
    <div>
      <h1>All Products</h1>
      <Link to="/products/new" className="btn btn-success">
        + New Products
      </Link>
      {products.map((p, index) => (
        <SingleProduct key={index} product={p} onDeleted={handleDeletedEvent} />
      ))}
    </div>
  );
};

export default Products;

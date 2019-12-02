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

  React.useEffect(() => {
    console.log("Loading Products");
    axios.get("http://localhost:4000/api/products").then(res => {
      //   console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <Link to="/products/new" className="btn btn-success">
        + New Products
      </Link>
      {products.map((p, index) => (
        <SingleProduct key={index} product={p} />
      ))}
    </div>
  );
};

export default Products;

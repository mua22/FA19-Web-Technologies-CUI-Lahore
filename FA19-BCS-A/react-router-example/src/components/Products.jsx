import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  React.useEffect(() => {
    console.log("From products Component");
    loadData();
  }, []);
  const loadData = () => {
    axios.get("http://localhost:4000/api/products").then(res => {
      console.log(res.data);
      setProducts(res.data);
    });
  };
  const [products, setProducts] = React.useState([]);
  //   let products = [
  //     { name: "Pen", price: 10 },
  //     { name: "Pencil", price: 110 }
  //   ];
  return (
    <div className="row1">
      <h1>All Products</h1>
      <Link to="/products/new" className="btn btn-success btn-sm">
        + Product
      </Link>
      {products.map((p, index) => (
        <SingleProduct key={index} product={p} onProductDeleted={loadData} />
      ))}
    </div>
  );
};

export default Products;

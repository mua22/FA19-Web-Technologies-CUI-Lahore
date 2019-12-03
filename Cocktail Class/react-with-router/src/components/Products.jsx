import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
const Products = () => {
  React.useEffect(() => {
    // console.log("Sending Axios Get");
    axios.get("http://localhost:4000/api/products").then(res => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  const [products, setProducts] = React.useState([]);
  return (
    <div>
      <h1>All Products</h1>
      {products.map((p, index) => (
        <SingleProduct key={index} product={p} />
      ))}
    </div>
  );
};

export default Products;

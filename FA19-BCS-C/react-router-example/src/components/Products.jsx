import React from "react";
import ProductSummary from "./ProductSummary";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    console.log("Mounted");
    axios.get("http://localhost:4000/api/products").then(res => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h3>All Products</h3>
      {products.map((p, index) => (
        <ProductSummary key={index} product={p} />
      ))}
    </div>
  );
};

export default Products;

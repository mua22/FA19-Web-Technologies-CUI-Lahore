import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Product from "./components/product";
import ProductsList from "./components/ProductsList";

function App() {
  let products = [
    { title: "Alto", price: "300" },
    { title: "CULTUS", price: "400" },
    { title: "Honda", price: "200" }
  ];
  return (
    <div className="container">
      <ProductsList products={products} />
    </div>
  );
}

export default App;

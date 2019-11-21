import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import WelcomeBox from "./components/WelcomeBox";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      {/* <h1>Hello Naughty Class</h1> */}
      {/* <WelcomeBox>
        <Welcome name="Usman" hobby="coding" />
        <Welcome name="Hareem" hobby="playing" />
        <Welcome name="Nabeel" hobby="facebook" />
      </WelcomeBox> */}
    </div>
  );
}

export default App;

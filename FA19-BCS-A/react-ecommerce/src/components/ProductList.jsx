import React, { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  state = { showPrice: true };
  products = [
    { title: "Web", price: 50 },
    { title: "OS", price: 200 },
    { title: "Automata", price: 10 }
  ];
  render() {
    return (
      <div>
        <h1>All Products</h1>
        {this.products.map((p, index) => (
          <Product
            key={index}
            showPrice={this.state.showPrice}
            title={p.title}
            price={p.price}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;

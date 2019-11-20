import React, { Component } from "react";
import Product from "./product";
class ProductsList extends Component {
  state = {
    showPrice: true
  };
  handleShowButtonClick = e => {
    this.setState({ showPrice: !this.state.showPrice });
  };
  render() {
    return (
      <div className="products">
        <button
          className="btn btn-primary"
          onClick={this.handleShowButtonClick}
        >
          Toggle Price View
        </button>
        <Product title="Dummy" price="400" />
        {this.props.products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            showPrice={this.state.showPrice}
          />
        ))}
      </div>
    );
  }
}

export default ProductsList;

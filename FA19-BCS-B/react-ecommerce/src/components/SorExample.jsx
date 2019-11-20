import React, { Component } from "react";
class SortExample extends Component {
  state = {
    products: ["Osama", "Noman", "Ali"]
  };
  handleSort = e => {
    this.setState({ products: this.state.products.sort() });
  };
  render() {
    const { enableSortButton } = this.props;
    return (
      <div className="sort-example">
        {enableSortButton && (
          <button onClick={this.handleSort}>Sort Data</button>
        )}

        <ul>
          {this.state.products.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SortExample;

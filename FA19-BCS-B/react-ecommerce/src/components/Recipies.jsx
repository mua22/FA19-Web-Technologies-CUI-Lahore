import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";
import axios from "axios";
class Recipies extends Component {
  state = {
    recipies: []
  };
  componentDidMount() {
    var self = this;
    axios
      .get("https://usman-recipes.herokuapp.com/api/recipes")
      .then(function(response) {
        self.setState({ recipies: response.data });
      });
  }
  render() {
    if (this.state.recipies.length == 0) return <p>Loading ......</p>;
    return (
      <div>
        {this.state.recipies.map((rec, index) => (
          <SingleRecipe recipe={rec} key={index} />
        ))}
      </div>
    );
  }
}

export default Recipies;

import React from "react";
const SingleRecipe = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.body}</p>
    </div>
  );
};

export default SingleRecipe;

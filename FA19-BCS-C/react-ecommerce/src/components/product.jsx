import React from "react";
const Product = props => {
  console.log(props);
  const h1Style = {
    color: "gray",
    borderBottom: "2px dashed blue"
  };

  return (
    <div>
      <h1 style={h1Style}>{props.title}</h1>
      {props.showPrice && (
        <p className={getCSS(props.price)}>{props.price} :USD</p>
      )}
    </div>
  );
};
function getCSS(price) {
  return price < 200 ? "price-green" : "price-orange";
}
export default Product;

import React from "react";
const Product = props => {
  return (
    <div>
      {props.showPrice && <h1>{props.title}</h1>}
      <p className={props.price < 100 ? "price-red" : "price-orange"}>
        {props.price} PKR
      </p>
    </div>
  );
};

export default Product;

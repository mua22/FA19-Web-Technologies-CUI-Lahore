import React from "react";

const Book = props => {
  let pclass = props.book.price > 150 ? "red-price" : " green-price";
  const [showTitle, setShowTitle] = React.useState(true);
  return (
    <div>
      {showTitle && <h5>{props.book.title}</h5>}
      <button
        className="btn btn-success"
        onClick={e => setShowTitle(!showTitle)}
      >
        Toggle Title
      </button>
      <button
        className="btn btn-danger"
        onClick={e => props.onChangeShow(!props.showPrice)}
      >
        {" "}
        Toggle Prices
      </button>
      {props.showPrice && <p className={pclass}>{props.book.price} PKR</p>}
    </div>
  );
};

export default Book;

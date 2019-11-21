import React from "react";
import Book from "./Book";
var books = [
  { title: "OS", price: 200 },
  { title: "Web", price: 300 },
  { title: "Automata", price: 100 }
];
const BookList = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <button className="btn btn-info" onClick={e => setShow(!show)}>
        Toggle price
      </button>
      <h4>Books in store </h4>
      {books.map((b, index) => (
        <Book key={index} book={b} showPrice={show} onChangeShow={setShow} />
      ))}
    </div>
  );
};

export default BookList;

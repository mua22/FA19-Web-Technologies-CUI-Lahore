import React, { useState } from "react";

const MyToDoAdder = () => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button
        onClick={e => {
          window.store.dispatch({
            type: "ADD_TODO",
            todo: { text: newTodo, status: false }
          });
        }}
      >
        Add To Do{" "}
      </button>
    </div>
  );
};

export default MyToDoAdder;

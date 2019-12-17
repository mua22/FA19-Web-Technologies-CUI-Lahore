import React from "react";
import { connect } from "react-redux";

const ToDoCounter = props => {
  // console.log(props);
  return (
    <div>
      <h4>There Are {props.todos.length} ToDos;</h4>
      <button
        onClick={e => {
          window.store.dispatch({ type: "TOGGLE_STATUS" });
        }}
      >
        Toggle Status
      </button>
    </div>
  );
};

export default connect(state => state)(ToDoCounter);

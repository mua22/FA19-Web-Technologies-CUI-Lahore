import React from "react";
import { connect } from "react-redux";
const MarkAllButton = props => {
  console.log(props);
  let InComplete = props.todos.filter(t => !t.status);

  return InComplete.length != 0 ? (
    <button
      className="btn btn-success"
      onClick={e => {
        window.store.dispatch({ type: "MARK_ALL" });
      }}
    >
      Mark All Todos
    </button>
  ) : null;
};
export default connect(state => state)(MarkAllButton);

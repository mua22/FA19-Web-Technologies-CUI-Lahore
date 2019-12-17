import React from "react";
import { connect } from "react-redux";

const TodoStatusCount = props => {
  // console.log(props);
  var completed = props.todos.filter(t => t.status);
  return (
    <h5>
      Completed: {completed.length}; InComplete:
      {props.todos.length - completed.length};
    </h5>
  );
};

export default connect(state => state)(TodoStatusCount);

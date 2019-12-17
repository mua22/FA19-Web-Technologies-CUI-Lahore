import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import * as allActions from "./../store/actions/todo_actions";
import TodoStatusCount from "./TodoStatusCount";
import MarkAllButton from "./MarkAllButton";
const ShowTodo = ({ todos, filter }) => {
  const filtered = filterTodo(todos, filter);
  return (
    <div className="container">
      <div className="btn-group float-left">
        <button
          className="btn btn-sm btn-primary"
          onClick={e => {
            window.store.dispatch({ type: "TOGGLE_STATUS" });
          }}
        >
          Toggle Status
        </button>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => setFilter(allActions.SHOW_ALL)}
        >
          Show All
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => setFilter(allActions.COMPLETED)}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter(allActions.NOT_COMPLETED)}
          className="btn btn-sm btn-dark"
        >
          Not Completed
        </button>
        <MarkAllButton />
      </div>
      <p className="float-right">{filter + " Todos "}</p>
      <table className="table table-dark  table-bordered table-collapsed text-center">
        <thead>
          <tr>
            <th>SR</th>
            <th>TODO </th>
            <th>STATUS</th>
            <th>Remove Todo</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  style={{ textDecoration: todo.status ? "line-through" : "" }}
                >
                  {todo.text}
                </td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "lightgreen", fontSize: "25px" }}
                    onClick={() => toggleTodo(index)}
                    icon={todo.status ? faCheck : faTimes}
                  />
                </td>
                <td>
                  <button
                    onClick={() => removeTodo(index)}
                    className="btn btn-danger"
                  >
                    Remove Todo
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TodoStatusCount />
      {/* <TodoStatusCount /> */}
    </div>
  );
};
function removeTodo(index) {
  window.store.dispatch({
    type: allActions.DELETE_TODO,
    index
  });
}

function toggleTodo(index) {
  window.store.dispatch({
    type: allActions.SWITCH_TODO,
    index: index
  });
}
function setFilter(filter) {
  window.store.dispatch({
    type: allActions.SET_FILTER,
    filter
  });
}

function filterTodo(todos, filter) {
  switch (filter) {
    case allActions.SHOW_ALL:
      return todos;
    case allActions.COMPLETED:
      return todos.filter(todo => todo.status);
    case allActions.NOT_COMPLETED:
      return todos.filter(todo => !todo.status);
    default:
      return todos;
  }
}
const mapStateToProps = state => state;
// Can Also Be Written as
// const mapStateToProps = state => {
//   return state;
// };

export default connect(mapStateToProps)(ShowTodo);

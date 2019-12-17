import React, { Component } from "react";
import * as allActions from "./../store/actions/todo_actions";
import ToDoCounter from "./ToDoCounter";
class AddNewTodo extends Component {
  state = { text: "" };
  hanldeSubmit = e => {
    e.preventDefault();
    window.store.dispatch({
      type: allActions.ADD_TODO,
      todo: { text: this.state.text, status: false }
    });
    this.setState({ text: "" });
  };
  hanldeChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <>
        <ToDoCounter />
        <form onSubmit={this.hanldeSubmit} className="text-center">
          <input
            type="text"
            className="ml-auto mr-auto mt-2 mb-2 form-control col-3"
            placeholder="Enter A Todo"
            onChange={this.hanldeChange}
            value={this.state.text}
          />
        </form>
      </>
    );
  }
}

export default AddNewTodo;

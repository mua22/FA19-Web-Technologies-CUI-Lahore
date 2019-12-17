import React from "react";
import ShowTodo from "./ShowTodo";
import AddNewTodo from "./AddNewTodo";
import MyToDoAdder from "./MyTodoAdder";
import ToDoCounter from "./ToDoCounter";

const TodoApp = props => {
  return (
    <>
      <ShowTodo /> <AddNewTodo />
      {/* <ShowTodo /> */}
      {/* <MyToDoAdder /> */}
    </>
  );
};

export default TodoApp;

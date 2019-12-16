import React from "react";
import ShowTodo from "./ShowTodo";
import AddNewTodo from "./AddNewTodo";
import MyToDoAdder from "./MyTodoAdder";

const TodoApp = props => {
  return (
    <>
      <AddNewTodo />
      <ShowTodo />
      <ShowTodo />
      <MyToDoAdder />
    </>
  );
};

export default TodoApp;

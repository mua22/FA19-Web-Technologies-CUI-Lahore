import React from "react";
import ShowTodo from "./ShowTodo";
import AddNewTodo from "./AddNewTodo";
import MyToDoAdder from "./MyTodoAdder";
import ToDoCounter from "./ToDoCounter";
import MarkAllButton from "./MarkAllButton";

const TodoApp = props => {
  return (
    <>
      <MarkAllButton />
      <AddNewTodo />
      <ShowTodo />

      {/* <ShowTodo /> */}
      {/* <AddNewTodo /> */}
      {/* <ShowTodo /> */}
      {/* <MyToDoAdder /> */}
    </>
  );
};

export default TodoApp;

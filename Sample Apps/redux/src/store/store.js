import { todoReducer } from "./reducer/todo_reducer";
import { createStore } from "redux";

export const store = createStore(
  todoReducer,
  window.devToolsExtension && window.devToolsExtension()
);

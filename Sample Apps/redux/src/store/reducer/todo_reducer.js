import * as allActions from "./../actions/todo_actions";
import { produce } from "immer";

const initialState = {
  todos: [
    {
      text: "Pakistan Zindabad",
      status: true
    }
  ],
  filter: allActions.SHOW_ALL
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case allActions.ADD_TODO:
      return produce(state, draftState => {
        draftState.todos.push(action.todo);
        // draftState.todos.push({ text: "wow", status: false });
      });
    case allActions.SET_FILTER:
      return produce(state, draftState => {
        draftState.filter = action.filter;
      });
    case allActions.SWITCH_TODO:
      return produce(state, draftState => {
        draftState.todos[action.index].status = !draftState.todos[action.index]
          .status;
      });
    case allActions.DELETE_TODO:
      return produce(state, draftState => {
        draftState.todos.splice(action.index, 1);
      });
    default:
      return state;
  }
}

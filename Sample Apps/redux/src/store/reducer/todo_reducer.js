import * as allActions from "./../actions/todo_actions";
import { produce } from "immer";
const initialState = {
  todos: [
    {
      text: "I will take Coffee",
      status: true
    },
    {
      text: "A section is officially banished",
      status: false
    }
  ],
  filter: allActions.SHOW_ALL
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "MARK_ALL":
      return produce(state, draftState => {
        for (var i = 0; i < draftState.todos.length; i++)
          draftState.todos[i].status = true;
      });
    case "TOGGLE_STATUS":
      return produce(state, draftState => {
        for (var i = 0; i < draftState.todos.length; i++)
          draftState.todos[i].status = !draftState.todos[i].status;
        // return draftState;
      });

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

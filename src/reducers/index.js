import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "../feature/todos/todosSlice";

export default combineReducers({
  todos: todosReducer,
});

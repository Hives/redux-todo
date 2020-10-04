import todo from './todo.slice'
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    todo
  },
});

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
        state.todos.push(action.payload)
    },
  },
});

export default todoSlice.reducer;

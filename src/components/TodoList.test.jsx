import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import { addTodo } from "../feature/todos/todosSlice";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const renderApp = () => {
  const store = configureStore({ reducer: rootReducer });

  const app = render(<TodoList store={store} />);

  return { app, store };
};

describe("TodoList", () => {
  it("renders todos from the store", () => {
    const { app, store } = renderApp();
    store.dispatch(addTodo("My first item"));
    store.dispatch(addTodo("My second item"));
    expect(app.getByText("My first item")).toBeInTheDocument();
    expect(app.getByText("My second item")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import AddTodo from "./AddTodo";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import sinon from "sinon";
import { addTodo } from "../feature/todos/todosSlice";

const renderApp = () => {
  const store = configureStore({ reducer: rootReducer });
  const dispatchSpy = sinon.spy(store, "dispatch");

  const app = render(<AddTodo store={store} />);

  return { app, dispatchSpy };
};

describe("AddTodo", () => {
  it("Saving dispatches action and clears input", () => {
    const { app, dispatchSpy } = renderApp();

    const field = app.getByPlaceholderText("What do you need to do?");
    expect(field.value).toBe("");

    userEvent.type(field, "My todo item");
    userEvent.click(app.getByText("Save"));

    expect(dispatchSpy.calledWith(addTodo("My todo item"))).toBe(true);
    expect(field.value).toBe("");
  });
});

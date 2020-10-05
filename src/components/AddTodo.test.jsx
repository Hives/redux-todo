import React from "react";
import { render } from "@testing-library/react";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const renderApp = () => {
  const store = configureStore({ reducer: rootReducer });

  const addTodo = jest.fn(() => {});

  const app = render(
    <Provider store={store}>
      <AddTodo addTodo={addTodo} />
    </Provider>
  );

  return { app, store, addTodo };
};

describe("AddTodo", () => {
  it("saving clears the input", () => {
    const { app } = renderApp();

    const field = app.getByPlaceholderText("What do you need to do?");
    expect(field.value).toBe("");

    userEvent.type(field, "My todo item");
    expect(field.value).toBe("My todo item");

    userEvent.click(app.getByText("Save"));
    expect(field.value).toBe("");
  });
})

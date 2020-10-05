import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { Provider } from "react-redux";

const renderApp = () => {
  const store = configureStore({ reducer: rootReducer });

  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

it("renders heading", () => {
  const app = renderApp();
  const heading = app.getByText("todos");
  expect(heading).toBeInTheDocument();
});

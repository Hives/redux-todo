import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const renderApp = () => render(<App />);

it("renders heading", () => {
  const app = renderApp();
  const heading = app.getByText("todos");
  expect(heading).toBeInTheDocument();
});

it("renders textbox for a to-do item", () => {
  const app = renderApp();
  const input = app.getByPlaceholderText("What needs to be done?");
  expect(input).toBeInTheDocument();
});

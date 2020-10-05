import React from "react";
import AddTodo from "./AddTodo";
import ToDos from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>todos</h1>
      </header>
      <AddTodo />
      <ToDos />
    </div>
  );
}

export default App;

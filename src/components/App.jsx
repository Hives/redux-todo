import React from "react";
import Input from "./Input";
import ToDos from "./ToDoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>todos</h1>
      </header>
      <Input />
      <ToDos />
    </div>
  );
}

export default App;

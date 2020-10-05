import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../feature/todos/todosSlice";

const mapDispatch = { addTodo };

function AddTodo({ addTodo }) {
  const [todoText, setTodoText] = useState("");

  const save = () => {
    addTodo(todoText);
    setTodoText("");
  };

  const onChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={save}>Save</button>
    </>
  );
}

export default connect(null, mapDispatch)(AddTodo);

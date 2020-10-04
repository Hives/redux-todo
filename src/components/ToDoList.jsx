import React from "react";
import { useSelector } from "react-redux";

function Input() {
  const { todos } = useSelector(state => state.todo);

  return (
    <ul>
       {todos.map((todo, index) => (
         <li key={index}>{todo}</li>
       ))}
    </ul>
  );
}

export default Input;

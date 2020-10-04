import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSlice } from "../state/todo.slice";

function Input() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const save = () => {
    dispatch(todoSlice.actions.add(value));
    setValue("")
  }

  return (
    <>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
        }}
      />
      <button onClick={save}>Save</button>
    </>
  );
}

export default Input;

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ todos: state.todos });

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, null)(TodoList);

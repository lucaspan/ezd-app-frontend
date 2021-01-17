import React from "react";

import { TodoForm, TodoList } from "../components/Todo";

import "./TodoContainer.scss";

const TodoContainer = () => {
  return (
    <div>
      <h1>Simple Boilerplate React Context Hooks</h1>
      <div className="TodoContainer">
        <div className="TodoCard">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;

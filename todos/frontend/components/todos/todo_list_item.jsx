import React from 'react';
import merge from 'lodash/merge';

const TodoListItem = ({ todo, removeTodo, receiveTodo }) => {
  const flippedTodo = merge({}, todo);
  flippedTodo.done = !todo.done;
  const status = todo.done ? "Undo" : "Done";
  return (
    <div>
      <li>{todo.title}</li>
      <button onClick={() => receiveTodo(flippedTodo)}>{status}</button>
      <button onClick={() => removeTodo(todo)}>Delete Todo</button>
    </div>
  );
};

export default TodoListItem;

import React from 'react';
import merge from 'lodash/merge';

const TodoListItem = ({ todo, removeTodo, updateTodo, deleteTodo }) => {
  const flippedTodo = merge({}, todo);
  flippedTodo.done = !todo.done;
  const status = todo.done ? "Undo" : "Done";
  return (
    <div>
      <li>{todo.title}</li>
      <button onClick={() => updateTodo(flippedTodo)}>{status}</button>
      <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
    </div>
  );
};

export default TodoListItem;

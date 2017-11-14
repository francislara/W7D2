import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, rootEl);


  window.allTodos = allTodos;
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
});

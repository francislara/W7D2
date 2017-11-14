import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      const dupState = merge({}, state);
      delete dupState[action.todo.id];
      return dupState;
    default:
      return state;
  }
};

export default todosReducer;

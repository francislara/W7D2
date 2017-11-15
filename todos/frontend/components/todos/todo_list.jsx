import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, updateTodo, createTodo, deleteTodo, fetchTodos, errors } = this.props;
    return (
      <div>
        <ul>
          {
            todos.map( todo => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          }
        </ul>
        <TodoForm
          createTodo={createTodo}
          errors={errors}
        />
      </div>
    );

  }
}

export default TodoList;

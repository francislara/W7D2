import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo, createTodo, removeTodo, fetchTodos } = this.props;
    return (
      <div>
        <ul>
          {
            todos.map( todo => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                receiveTodo={receiveTodo}/>
            ))
          }
        </ul>
        <TodoForm createTodo={createTodo}/>
      </div>
    );

  }
}

export default TodoList;

export function fetchTodos() {
  return $.ajax({
    url: 'api/todos'
  });
}

export function createTodo(todo) {
  return $.ajax({
    url: 'api/todos',
    method: 'POST',
    data: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: todo.done
      }
    }
  });
}

export function updateTodo(todo) {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'PATCH',
    data: {
      todo: {
        title: todo.title,
        body: todo.body,
        done: todo.done
      }
    }
  });
}

export function deleteTodo(todo) {
  return $.ajax({
    url: `api/todos/${todo.id}`,
    method: 'DELETE'
  });
}

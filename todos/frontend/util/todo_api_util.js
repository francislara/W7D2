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

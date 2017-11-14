

export const allTodos = (state) => (
  Object.keys(state.todos).map(key => {
    return state.todos[key];
  })
);

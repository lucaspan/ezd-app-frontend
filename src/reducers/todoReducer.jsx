const addTodo = (state, todoText) => {
  const newTodo = {
    id: (state.length > 0 && state[state.todoList.length - 1].id + 1) || 0,
    text: todoText,
    tag: "active"
  };

  return [...state, newTodo];
};

const removeTodo = (state, todoId) => {
  const newTodoList = state.filter((todo) => todo.id !== todoId);

  return newTodoList;
};

const editTodoTag = (state, todoId, tag) => {
  const todo = state.find((todo) => todo.id === todoId);
  const todoIndex = state.indexOf(todo);
  const newTodo = { ...todo, tag };

  const newTodoList = [
    ...state.slice(0, todoIndex),
    newTodo,
    ...state.slice(todoIndex + 1)
  ];

  return newTodoList;
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action.todoText);
    case "REMOVE_TODO":
      return removeTodo(state, action.todoId);
    case "EDIT_TODO_TAG":
      return editTodoTag(state, action.todoId, action.tag);
    default:
      return state;
  }
};

export default todoReducer;

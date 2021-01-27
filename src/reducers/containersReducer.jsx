const addContainer = (state, container) => {
  return [...state, container];
};

const containersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTAINER":
      return addContainer(state, action.container);
    default:
      return state;
  }
};

export default containersReducer;

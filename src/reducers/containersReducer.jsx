const addContainer = (state, container) => {
  return [...state, container];
};

const loadMyContainers = (state, containers) => {
  return containers;
};

const containersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTAINER":
      return addContainer(state, action.container);
    case "LOAD_MY_CONTAINERS":
      return loadMyContainers(state, action.containers);
    default:
      return state;
  }
};

export default containersReducer;

export const addContainer = (container, dispatch) => {
  dispatch({
    type: "ADD_CONTAINER",
    container: container
  });
};

export const loadMyContainers = (containers, dispatch) => {
  dispatch({
    type: "LOAD_MY_CONTAINERS",
    containers: containers
  });
};

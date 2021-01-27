export const addContainer = (container, dispatch) => {
  dispatch({
    type: "ADD_CONTAINER",
    container: container
  });
};

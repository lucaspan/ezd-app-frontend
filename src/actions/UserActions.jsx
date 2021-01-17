export const signInUser = (user, dispatch) => {
  dispatch({
    type: "SIGN_IN_USER",
    user: user
  });
};

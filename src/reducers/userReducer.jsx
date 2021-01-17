const signInUser = (state, user) => {
  return { ...state, ...user };
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_USER":
      return signInUser(state, action.user);
    default:
      return state;
  }
};

export default userReducer;

import React, { createContext, useReducer } from "react";

import todoReducer from "../reducers/todoReducer";
import userReducer from "../reducers/userReducer";

const initialState = {
  todoList: [],
  user: {}
};

export const Store = createContext(initialState);

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};

const reducers = combineReducers({
  todoList: todoReducer,
  user: userReducer
});

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

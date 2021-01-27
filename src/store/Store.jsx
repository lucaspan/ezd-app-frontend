import React, { createContext, useReducer } from "react";

import todoReducer from "../reducers/todoReducer";
import containersReducer from "../reducers/containersReducer";

const initialState = {
  todoList: [],
  containers: []
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
  containers: containersReducer
});

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

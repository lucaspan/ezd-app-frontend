import React, { createContext, useReducer } from "react";

import todoReducer from "../reducers/todoReducer";
import containersReducer from "../reducers/containersReducer";

const initialState = {
  todoList: [],
  containers: [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" }
  ]
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

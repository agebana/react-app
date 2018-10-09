import React from "react";
import { Provider as BaseStoreProvider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Reducer";

const store = createStore(rootReducer);

export const Provider = ({ children }) => (
  <BaseStoreProvider store={store}>{children}</BaseStoreProvider>
);

export default store;

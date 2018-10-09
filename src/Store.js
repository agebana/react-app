import React from "react";
import { Provider as BaseStoreProvider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./Reducer";

const store = createStore(
  rootReducer,
  devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

export const Provider = ({ children }) => (
  <BaseStoreProvider store={store}>{children}</BaseStoreProvider>
);

export default store;

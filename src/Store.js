import React from "react";
import { Provider as BaseStoreProvider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreaters and other options if needed
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

sagaMiddleware.run(rootSaga);

export const Provider = ({ children }) => (
  <BaseStoreProvider store={store}>{children}</BaseStoreProvider>
);

export default store;

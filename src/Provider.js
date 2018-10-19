import React from "react";
import { Provider as StoreProvider } from "./store";

export default Component => () => (
  <StoreProvider>
    <Component />
  </StoreProvider>
);

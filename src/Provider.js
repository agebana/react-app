import React from "react";
import { Provider as StoreProvider } from "./Store";

export default Component => () => (
  <StoreProvider>
    <Component />
  </StoreProvider>
);

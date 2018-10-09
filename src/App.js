import { compose } from "recompose";
import React from "react";
import { hot } from "react-hot-loader";

import withProvider from "./Provider";

export default compose(
  hot(module),
  withProvider
)(_props => <div>Hello, World!</div>);

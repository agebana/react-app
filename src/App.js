import { compose } from "recompose";
import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import withProvider from "./Provider";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

const NoMatch = props => <Redirect to="/404" />;

export default compose(
  hot(module),
  withProvider
)(_props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/404" component={NotFound} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
));

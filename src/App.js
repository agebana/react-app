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
import HomeScreen from "./screens/Home";
import NotFoundScreen from "./screens/NotFound";

const NoMatch = props => <Redirect to="/404" />;

export default compose(
  hot(module),
  withProvider
)(props => (
  <Router>
    <Switch>
      <Route exact path={HomeScreen.path} component={HomeScreen.component} />
      <Route
        exact
        path={NotFoundScreen.path}
        component={NotFoundScreen.component}
      />
      <Route component={NoMatch} />
    </Switch>
  </Router>
));

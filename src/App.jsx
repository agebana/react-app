import { compose } from "recompose";
import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import styles from "./App.scss";
import withProvider from "./Provider";
import HomeScreen from "@components/Home";
import NotFoundScreen from "@components/NotFound";

const NoMatch = props => <Redirect to={NotFoundScreen.path} />;

export default compose(
  hot(module),
  withProvider
)(props => (
  <div className={styles.AppRoot}>
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route
            exact
            path={HomeScreen.path}
            component={HomeScreen.component}
          />
          <Route
            exact
            path={NotFoundScreen.path}
            component={NotFoundScreen.component}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </div>
));

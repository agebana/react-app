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
import NavigationBar from "@components/NavigationBar";
import HomeScreen from "@screens/Home";
import NotFoundScreen from "@screens/NotFound";
import NotFound from "@screens/NotFound";

const NoMatch = props => <Redirect to={NotFound.path} />;

export default compose(
  hot(module),
  withProvider
)(props => (
  <Router>
    <div className={styles.appRoot}>
      <NavigationBar />
      <Switch>
        <Route exact path={HomeScreen.path} component={HomeScreen.component} />
        <Route
          exact
          path={NotFoundScreen.path}
          component={NotFoundScreen.component}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
));

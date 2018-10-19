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
import WoofrScreen from "@components/Woofr";
import NavigationBar from "@components/NavigationBar";

const routes = [
  {
    component: () => <HomeScreen />,
    path: "/",
    exact: true
  },
  {
    component: () => <WoofrScreen />,
    path: "/woofr"
  }
];

const DefinedRoutes = () => (
  <React.Fragment>
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </React.Fragment>
);

const NoMatch = props => <Redirect to={"/notFound"} />;

export default compose(
  hot(module),
  withProvider
)(props => (
  <div className={styles.AppRoot}>
    <Router>
      <div className={styles.App}>
        <NavigationBar />
        <Switch>
          <DefinedRoutes />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </div>
));

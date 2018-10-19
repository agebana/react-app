import styles from "./Woofr";
import React from "react";
import { connect } from "react-redux";
import { compose, withStateHandlers, lifecycle } from "recompose";
import { fetchRandomDogs } from "@ducks/Woofr";

export const path = "/woofr";

const delay = t => new Promise(resolve => setTimeout(resolve, t));

const withAsyncData = Component =>
  compose(
    connect(
      null,
      { fetchRandomDogs }
    ),
    withStateHandlers(
      {
        data: ["foo", "bar"]
      },
      {
        updateData: (state, props) => payload => ({ data: payload })
      }
    ),
    lifecycle({
      componentDidMount() {
        this.props.fetchRandomDogs("wa");
      }
    })
  )(Component);

const Woof = withAsyncData(({ updateData, data }) => (
  <div>
    <div>Woof, woof! {data}</div>
    <button onClick={() => updateData(["hello world"])}>Get doggos</button>
    <div />
  </div>
));

export const Component = props => (
  <div className={styles.root}>
    <h1>Random Dog Pictures</h1>
    <Woof />
  </div>
);

export default {
  path,
  component: Component
};

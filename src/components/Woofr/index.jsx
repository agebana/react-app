import styles from "./Woofr";
import React from "react";
import { compose } from "recompose";
import withActionOnMount from "@enhancers/withActionOnMount";
import withState from "@enhancers/withState";
import { fetchRandomDogs, stateSelector } from "@ducks/Woofr";

const Woof = compose(
  withState(stateSelector),
  withActionOnMount(fetchRandomDogs())
)(({ data }) => (
  <div>
    <div>Woof, woof!</div>
    <button onClick={() => console.log(props)}>Get doggos</button>
    <div />
  </div>
));

export default props => (
  <div className={styles.root}>
    <h1>Random Dog Pictures</h1>
    <Woof />
  </div>
);

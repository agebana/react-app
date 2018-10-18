import styles from "./Woofr";
import React from "react";

export const path = "/woofr";
export const Component = props => (
  <div className={styles.root}>
    <h1>Random Dog Pictures</h1>
  </div>
);

export default {
  path,
  component: Component
};

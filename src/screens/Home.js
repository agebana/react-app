import React from "react";
import styles from "@css/Home";

export const path = "/";
export const Component = props => (
  <div className={styles.root}>This is the home screen!</div>
);

export default {
  path,
  component: Component
};

import styles from "./styles";
import React from "react";

export const path = "/";
export const Component = props => (
  <div className={styles.root}>Hello, World</div>
);

export default {
  path,
  component: Component
};

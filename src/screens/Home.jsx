import styles from "@css/Home";
import React from "react";

export const path = "/";
export const Component = props => (
  <div className={styles.root}>Home Screen</div>
);

export default {
  path,
  component: Component
};

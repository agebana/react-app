import styles from "./Home";
import React from "react";

export const path = "/";
export const Component = props => (
  <div className={styles.root}>
    <h1>Section Heading</h1>
    <p>Paragraph</p>
    <h1>Section Heading</h1>
    <h2>Sub-heading</h2>
    <p>Paragraph</p>
    <h2>Sub-heading</h2>
    <p>Paragraph</p>
  </div>
);

export default {
  path,
  component: Component
};

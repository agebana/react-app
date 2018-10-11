import styles from "./styles";
import React from "react";

export const path = "/";
export const Component = props => (
  <div className={styles.root}>
    <div className={styles.sideSection}>
      <div className={styles.sideMenu}>Side menu goes here</div>
    </div>
    <div className={styles.content}>
      <h1>Content Goes Here</h1>
      <h2>This is a section header</h2>
      <p>This is a paragraph</p>
      <h2>This is a section header</h2>
      <p>This is a paragraph</p>
    </div>
    <div className={styles.sideSection}>
      <div className={styles.extraFeed}>Extra section</div>
    </div>
  </div>
);

export default {
  path,
  component: Component
};

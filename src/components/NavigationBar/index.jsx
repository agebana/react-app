import React from "react";
import styles from "./styles";

export default props => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1>Navigation Bar</h1>
      <div className={styles.links}>
        <h2>Link 1</h2>
        <h2>Link 2</h2>
        <h2>Link 3</h2>
      </div>
    </div>
  </div>
);

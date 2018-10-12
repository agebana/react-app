import styles from "./NavigationBar.scss";
import React from "react";

export default props => (
  <div className={styles.root}>
    <div className={styles.linkGroup}>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </div>
  </div>
);

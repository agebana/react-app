import styles from "./NavigationBar.scss";
import React from "react";
import { Link } from 'react-router-dom';

export default props => (
  <div className={styles.root}>
    <div className={styles.linkGroup}>
      <Link to="/" className={styles.link}>
        <span >Home</span>
      </Link>
      <Link to="/woofr" className={styles.link}>
        <span >Woofr</span>
      </Link>
    </div>
  </div>
);

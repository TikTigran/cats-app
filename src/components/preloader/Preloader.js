import React from "react";
// STYLES
import styles from "./preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Preloader;

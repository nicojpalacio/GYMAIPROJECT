import React from "react";
import styles from "@/app/downloadview/page.module.css";

const AnimatedBackground = ({ children }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles.bg}></div>
      <div className={`${styles.bg} ${styles.bg2}`}></div>
      <div className={`${styles.bg} ${styles.bg3}`}></div>
      <div className={styles.containerTwo}>{children}</div>
    </div>
  );
};

export default AnimatedBackground;
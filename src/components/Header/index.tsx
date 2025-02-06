import React from "react";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      My Header
      <div className={styles.headerSubtext}>My sub text</div>
    </div>
  );
};

export default Header;

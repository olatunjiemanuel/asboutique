import React from "react";

import styles from "./Header.module.css";

import flowerBackgorundImg from "../../UI/Images/flower background Image.png";

const Header = () => {
  return (
    <div className={styles.headerCtnr}>
      <div className={styles.headerTxtCntr}>
        <div className={styles.headerMaintext}>
          <p>AS Bouquets</p>
        </div>
        <div className={styles.headerSubtext}>
          <p>Flowers & handmade Goods</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

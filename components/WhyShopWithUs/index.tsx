import React from "react";
import styles from "./WhyShopWithUs.module.css";

import OrangePlanetImg from "../../src/UI/Images/orange planet friendly 1.png";
import SupportLogoImg from "../../src/UI/Images/Support Image.png";
import RibbonLogoImg from "../../src/UI/Images/Support Image.png";

const WhyShopWithUs = () => {
  return (
    <div className={styles.WhyShopWithUs}>
      <div className={styles.WhyShopWithUsTextCntnr}>
        <p className={styles.WhyShopWithUsMainText}>Why Shop With Us?</p>
        <p className={styles.WhyShopWithUsSubText}>
          AS Bouquets is a small, female-owned business based in Denver,
          Colorado. During spring and summer, we function as a sustainable
          floral business. During the fall and winter, we aim to support and
          partner with small/local businesses by developing curated gift boxes.
        </p>
      </div>
      <div className={styles.WhyShopWithUsLogoCtnr}>
        <div>
          <div>
            <img
              className={styles.Images}
              src={OrangePlanetImg}
              alt="Orange Planet Logo"
            />
          </div>
          <div className={styles.logoTextCntnrs}>
            <p className={styles.mainSubTxt}>PLANET FRIENDLY & SUSTAINABLE</p>
            <p className={styles.secondarySubTxt}>
              Our gift boxes contain all reusable packaging, and we recycle 100%
              of our floral scraps.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className={styles.Images}
              src={SupportLogoImg}
              alt="Orange Planet Logo"
            />
          </div>
          <div className={styles.logoTextCntnrs}>
            <p className={styles.mainSubTxt}>SUPPORTS LOCAL BUSINESSES</p>
            <p className={styles.secondarySubTxt}>
              All gift box products & botany/flora we use are sourced from
              local/small businesses.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className={styles.Images}
              src={RibbonLogoImg}
              alt="Orange Planet Logo"
            />
          </div>
          <div className={styles.logoTextCntnrs}>
            <p className={styles.mainSubTxt}>HIGH QUALITY PRODUCTS</p>
            <p className={styles.secondarySubTxt}>
              From our gift boxes to our floral arrangements, all of our
              products are handmade with care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShopWithUs;

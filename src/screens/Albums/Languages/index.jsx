import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

export const Languages = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.langItem} ${
          i18n.language === "en" ? styles.activeLang : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </div>
      <div
        className={`${styles.langItem} ${
          i18n.language === "ua" ? styles.activeLang : ""
        }`}
        onClick={() => changeLanguage("ua")}
      >
        UA
      </div>
    </div>
  );
};

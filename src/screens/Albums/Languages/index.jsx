import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const LANGUAGES = {
  EN: "en",
  UA: "ua",
};

export const Languages = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.langItem} ${
          i18n.language === LANGUAGES.EN ? styles.activeLang : ""
        }`}
        onClick={() => changeLanguage(LANGUAGES.EN)}
      >
        EN
      </div>
      <div
        className={`${styles.langItem} ${
          i18n.language === LANGUAGES.UA ? styles.activeLang : ""
        }`}
        onClick={() => changeLanguage(LANGUAGES.UA)}
      >
        UA
      </div>
    </div>
  );
};

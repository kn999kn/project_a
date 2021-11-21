import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
export const Form = ({ inputValue, onInputChange, onSubmit }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Input
        value={inputValue}
        onChange={onInputChange}
        placeholder={t("Type album title")}
        className={styles.input}
      />
      <Button variant="contained" onClick={onSubmit}>
        {t("Add to List")}
      </Button>
    </div>
  );
};

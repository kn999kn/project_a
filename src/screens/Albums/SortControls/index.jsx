import React from "react";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { useTranslation } from "react-i18next";
import { SORT_FIELDS } from "../constants";
import styles from "./styles.module.css";

export const SortControls = ({
  activeSortType,
  isReverseOrder,
  handleSort,
}) => {
  const { t } = useTranslation();
  const getIcon = (fieldName) => {
    if (activeSortType !== fieldName) return <ImportExportIcon />;
    return activeSortType === fieldName && isReverseOrder ? (
      <ArrowDownwardIcon />
    ) : (
      <ArrowUpwardIcon />
    );
  };

  return (
    <div className={styles.wrapper}>
      <Button
        endIcon={getIcon(SORT_FIELDS.NAME)}
        variant={
          activeSortType === SORT_FIELDS.NAME ||
          (activeSortType === SORT_FIELDS.NAME && isReverseOrder)
            ? "contained"
            : "outlined"
        }
        onClick={() => handleSort(SORT_FIELDS.NAME)}
      >
        {t("Sort by name")}
      </Button>
      <Button
        endIcon={getIcon(SORT_FIELDS.DATE)}
        variant={
          activeSortType === SORT_FIELDS.DATE ||
          (activeSortType === SORT_FIELDS.DATE && isReverseOrder)
            ? "contained"
            : "outlined"
        }
        onClick={() => handleSort(SORT_FIELDS.DATE)}
      >
        {t("Sort by date")}
      </Button>
      <Button
        endIcon={getIcon(SORT_FIELDS.ID)}
        variant={
          activeSortType === SORT_FIELDS.ID ||
          (activeSortType === SORT_FIELDS.ID && isReverseOrder)
            ? "contained"
            : "outlined"
        }
        onClick={() => handleSort(SORT_FIELDS.ID)}
      >
        {t("Sort by id")}
      </Button>
    </div>
  );
};

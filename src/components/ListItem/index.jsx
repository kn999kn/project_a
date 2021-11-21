import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import dayjs from "dayjs";

export const ListItem = ({
  name,
  id,
  date: timestamp,
  children,
  isGridView,
}) => {
  const date = dayjs(timestamp).format("YYYY/MM/DD hh:mm:ss");
  const viewClasses = isGridView ? styles.gridView : styles.listView;
  return (
    <div className={`${styles.listItem} ${viewClasses}`}>
      <span className={styles.name}>{name}</span>
      <span className={styles.date}>{date}</span>
      {children}
      <span className={styles.idBlock}>id: {id}</span>
    </div>
  );
};

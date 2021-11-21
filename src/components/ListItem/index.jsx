import React from "react";
import { Tooltip } from "@mui/material";
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
      <Tooltip title={id} placement="top">
        <span className={styles.idBlock}>id: {id}</span>
      </Tooltip>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";


export const List = ({ items = [], renderItem, isGrid }) => {
  const viewStyle = isGrid ? styles.grid : "";

  return (
    <div className={`${styles.wrapper} ${viewStyle}`}>
      {items.map(renderItem)}
    </div>
  );
};

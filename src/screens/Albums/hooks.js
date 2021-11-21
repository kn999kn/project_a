import { useState, useMemo, useEffect } from "react";
import { sortList } from "./helper";

export const useListSort = ({ list }) => {
  const [activeSortType, setActiveSortType] = useState(() =>
    localStorage.getItem("sortType")
  );
  const [isReverseOrder, setReverseOrder] = useState(() =>
    JSON.parse(localStorage.getItem("isReverseOrder") || false)
  );

  const sortedList = useMemo(() => {
    const sortedList = sortList(list, activeSortType);
    if (isReverseOrder) return [...sortedList].reverse();
    return sortedList;
  }, [list, activeSortType, isReverseOrder]);

  useEffect(() => {
    localStorage.setItem("sortType", activeSortType);
    localStorage.setItem("isReverseOrder", isReverseOrder);
  }, [activeSortType, isReverseOrder]);

  const resetSort = () => {
    setActiveSortType(null);
  };

  const handleSort = (type) => {
    if (activeSortType === type && isReverseOrder) {
      setReverseOrder(false);
      resetSort();
      return;
    }
    if (activeSortType === type && !isReverseOrder) {
      setReverseOrder(true);
      return;
    }

    setActiveSortType(type);
  };

  return {
    sortedList,
    activeSortType,
    isReverseOrder,
    setReverseOrder,
    handleSort,
    resetSort,
  };
};

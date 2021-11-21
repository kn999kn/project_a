import React, { useState, useReducer, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { List } from "../../components/List";
import { ListItem } from "../../components/ListItem";
import { Languages } from "./Languages";
import { Form } from "./Form";
import { SortControls } from "./SortControls";
import { v4 as uuidv4 } from "uuid";
import { LIST_ACTIONS } from "./constants";
import { listReducer } from "./reducer";
import styles from "./styles.module.css";
import { useListSort } from "./hooks";

const initialState = [];

export const Albums = () => {
  const [list, dispatch] = useReducer(
    listReducer,
    initialState,
    () => JSON.parse(localStorage.getItem("albumsList")) || initialState
  );
  const [inputValue, setInputValue] = useState("");
  const [isGrid, setIsGrid] = useState(
    () => JSON.parse(localStorage.getItem("isGrid")) || false
  );

  const { handleSort, sortedList, activeSortType, isReverseOrder } =
    useListSort({
      list,
    });

  const toggleView = () => {
    setIsGrid((prevValue) => !prevValue);
  };

  useEffect(() => {
    localStorage.setItem("albumsList", JSON.stringify(list));
    localStorage.setItem("isGrid", JSON.stringify(isGrid));
  }, [list, isGrid]);

  const resetInputValue = () => {
    setInputValue("");
  };

  const addItem = () => {
    if (!inputValue) return;
    const item = {
      id: uuidv4(),
      name: inputValue,
      date: new Date().getTime(),
      isFavorite: null,
    };
    dispatch({ type: LIST_ACTIONS.ADD_ITEM, payload: item });
    resetInputValue();
  };

  const removeItem = (id) => {
    dispatch({ type: LIST_ACTIONS.REMOVE_ITEM, payload: id });
  };

  const addFavoriteMark = (id) => {
    dispatch({ type: LIST_ACTIONS.ADD_FAVORITE_MARK, payload: id });
  };

  const removeFavoriteMark = (id) => {
    dispatch({ type: LIST_ACTIONS.REMOVE_FAVORITE_MARK, payload: id });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <Languages />
      <Form
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={addItem}
      />
      <div className={styles.controlsWrapper}>
        <SortControls
          activeSortType={activeSortType}
          isReverseOrder={isReverseOrder}
          handleSort={handleSort}
        />
        <IconButton
          color="primary"
          component="span"
          onClick={() => toggleView()}
          className={styles.viewButton}
        >
          {isGrid ? <FormatListBulletedIcon /> : <GridViewIcon />}
        </IconButton>
      </div>
      <List
        isGrid={isGrid}
        items={sortedList}
        renderItem={({ name, id, isFavorite, date }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            isGridView={isGrid}
            isFavorite={isFavorite}
            date={date}
          >
            {isFavorite ? (
              <IconButton
                color="primary"
                component="span"
                onClick={() => removeFavoriteMark(id)}
              >
                <StarIcon />
              </IconButton>
            ) : (
              <IconButton
                color="primary"
                component="span"
                onClick={() => addFavoriteMark(id)}
              >
                <StarBorderIcon />
              </IconButton>
            )}
            <IconButton
              color="primary"
              component="span"
              onClick={() => removeItem(id)}
            >
              <CloseIcon />
            </IconButton>
          </ListItem>
        )}
      />
    </div>
  );
};

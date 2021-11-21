import { LIST_ACTIONS } from "./constants";

export function listReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LIST_ACTIONS.ADD_ITEM: {
      return [...state, payload];
    }
    case LIST_ACTIONS.REMOVE_ITEM: {
      return state.filter((item) => item.id !== payload);
    }
    case LIST_ACTIONS.ADD_FAVORITE_MARK: {
      const upadatedState = state.map((item) => {
        if (item.id === payload) {
          return { ...item, isFavorite: true };
        }
        return item;
      });
      return upadatedState;
    }
    case LIST_ACTIONS.REMOVE_FAVORITE_MARK: {
      const upadatedState = state.map((item) => {
        if (item.id === payload) {
          return { ...item, isFavorite: false };
        }
        return item;
      });
      return upadatedState;
    }
    default:
      throw new Error();
  }
}

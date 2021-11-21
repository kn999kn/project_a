import { SORT_FIELDS } from "./constants";

/** Gets array of objects to sort and field (name| date | id) to be sorted by
 */
const sortAlphabeticallyAscending = (array, fieldKey) => {
  const sortedArray = [...array].sort((a, b) => {
    if (a[fieldKey]?.toLowerCase?.() < b[fieldKey]?.toLowerCase?.()) {
      return -1;
    }
    if (a[fieldKey]?.toLowerCase?.() > b[fieldKey]?.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};

const sortNumericallyAscending = (array, fieldKey) => {
  const sortedArray = [...array].sort((a, b) => a[fieldKey] - b[fieldKey]);
  return sortedArray;
};

export const sortList = (array, sortType) => {
  const fieldKey = sortType;
  switch (sortType) {
    case SORT_FIELDS.NAME: {
      return sortAlphabeticallyAscending(array, fieldKey);
    }

    case SORT_FIELDS.ID: {
      return sortAlphabeticallyAscending(array, fieldKey);
    }

    case SORT_FIELDS.DATE: {
      return sortNumericallyAscending(array, fieldKey);
    }
    default:
      return array;
  }
};

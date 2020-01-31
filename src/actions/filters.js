// Set Text Filter
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

// Sort By Amount
export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

// Sort By Date
export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

// Set Start Date
export const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

// Set End Date
export const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

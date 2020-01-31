import uuid from "uuid";

// Add Expenses

export const addExpenses = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSES",
    expenses: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

// Remove Expenses

export const removeExpenses = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSES",
    id
  };
};

// Edit Expenses

export const editExpenses = (id, update) => {
  return {
    type: "EDIT_EXPENSES",
    id,
    update
  };
};
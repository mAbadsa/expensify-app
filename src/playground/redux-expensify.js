import { createStore, combineReducers } from "redux";
import uuid from "uuid/v4";

// Add Expenses

const addExpenses = ({
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

const removeExpenses = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSES",
    id
  };
};

// Edit Expenses

const editExpenses = (id, update) => {
  return {
    type: "EDIT_EXPENSES",
    id,
    update
  };
};

// Set Text Filter
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

// Sort By Amount
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

// Sort By Date
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

// Set Start Date
const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

// Set End Date
const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

const expensesReducerDefaultState = [];

// Expense Reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return [...state, action.expenses];
    case "REMOVE_EXPENSES":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSES":
      return state.map(expenses => {
        if (expenses.id === action.id) {
          return {
            ...expenses,
            ...action.update
          };
        } else {
          return expenses;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefaultSate = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

// Filter Reducer
const filterReducer = (state = filterReducerDefaultSate, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get Visible Expense

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
      if(sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? -1 : 11
      }
  })
};

// Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expensesOne = store.dispatch(
  addExpenses({
    description: "Rent",
    note: "Empty...",
    amount: 110,
    createdAt: 1000
  })
);
const expensesTwo = store.dispatch(
  addExpenses({
    description: "Coffee",
    note: "Meduim Coffee",
    amount: 60,
    createdAt: 900
  })
);

// store.dispatch(removeExpenses({ id: expensesOne.expenses.id }));

// store.dispatch(editExpenses(expensesTwo.expenses.id, { amount: 65 }));

// store.dispatch(setTextFilter('Coffee'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(57));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: "m1pee05fuuidee000",
      description: "March rent",
      note: "No Notes...",
      amount: 1500,
      createdAt: 0
    }
  ],
  filter: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};


// Expense Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
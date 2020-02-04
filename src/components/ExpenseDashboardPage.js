import React from "react";
import ExpensesList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <div>This Is From Dashboard Component!</div>
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;

import React from "react";
import { connect } from "react-redux";
import { editExpenses, removeExpenses } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpenses(props.expense.id, expense));
          props.history.push("/");
          console.log(props);
        }}
      />
      <button
        onClick={e => {
          props.dispatch(removeExpenses({ id: props.expense.id }));
          props.history.push('/');
        }}>Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);

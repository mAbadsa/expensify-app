import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenses } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Expense Add Form</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpenses(expense));
            props.history.push('/');
        }}
        />
    </div>
)

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default connect()(AddExpensePage);
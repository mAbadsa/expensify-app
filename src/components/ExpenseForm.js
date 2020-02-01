import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';

const now = moment().format('MMM Do, YYYY');

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: '',
    note: "",
    createdAt: moment(),
    calendarFocused: false
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(() => ({ amount}))
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }));
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="description">Description : </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={this.state.description}
              autoFocus
              onChange={this.onDescriptionChange}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount : </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div>
            <label htmlFor="createAt">Create At : </label>
            <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
          </div>
          <div>
            <label htmlFor="note">Note : </label>
            <textarea
              type="text"
              id="note"
              name="note"
              placeholder="Add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            ></textarea>
          </div>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

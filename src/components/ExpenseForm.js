import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: '',
    note: ""
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
            <input type="date" id="createAt" name="createAt" />
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

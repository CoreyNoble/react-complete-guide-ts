import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value
      }
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value
      }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value
      }
    })
  }

  const submitForm = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onSubmit={submitForm}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

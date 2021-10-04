import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)

    console.log('Set new year: ', selectedYear)
  }

  const expenseItems = items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseItems}
      </Card>
    </>
  )
};

export default Expenses;

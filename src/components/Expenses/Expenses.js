import './Expenses.css'
import ExpenseItem from './ExpenseItem';

const Expenses = ({ expenses }) => {
  const expenseItems = expenses.map((expense) => 
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  )

  return (
    <div className="expenses">
      { expenseItems }
    </div>
  );
};

export default Expenses;

import './Expenses.css';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items }) => {
  const expenseItems = items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;

import React from 'react'
import ExpenseItem from './ExpenseItem';
import '../Css/Expenses.css';
import Card from '../UI/Card';

const Expenses = ({items}) => {
  return (
    <Card className='expenses'>
      <ExpenseItem item={items[0]}/>
    </Card>
  )
}

export default Expenses

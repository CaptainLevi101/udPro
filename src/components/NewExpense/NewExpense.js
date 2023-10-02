import React from 'react'
import '../Css/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
  return (
    <div>
        <div className='new-expense'>
        <ExpenseForm/>
        </div>
    </div>
  )
}

export default NewExpense;

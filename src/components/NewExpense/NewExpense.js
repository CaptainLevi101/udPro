import React from 'react'
import '../Css/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  }
//this is how we can communicate up, we can pass data to 
// to child via props and from that child wee can call that function 
//we passes in via props


  return (
    <div>
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    </div>
  )
}

export default NewExpense;

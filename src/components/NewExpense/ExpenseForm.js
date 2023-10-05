import React, { useState } from 'react'
import '../Css/ExpenseForm.css';
const ExpenseForm = (props) => {
    const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''

    });
//     const [enteredTitle, setEnteredTitle] = useState('');
//     const [enteredAmount, setEnteredAmount] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');
//   //we can have more than one state per component
//   //we can even use one state per component
    const titleChangeHandler = (e) => {
       setUserInput((prevState)=>{
        return {
            ...prevState,
        enteredTitle: e.target.value,
        }
       });
    }
    //this is much better i suppose
    const amountChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredAmount: e.target.value,
            }
            
           })
       
    }
    const dateChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredDate: e.target.value,
            }
           })
    }
    const submitHandler=(e)=>{
       e.preventDefault();
       const expenseData={
        title:userInput.enteredTitle,
        amount:userInput.enteredAmount,
        date:new Date(userInput.enteredDate)
       }
       props.onSaveExpenseData(expenseData);
       setUserInput((prevState)=>{
        return{
            enteredDate: '',
            enteredAmount:'',
            enteredTitle:''
        }
       })
      
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                        {/* we  can use onChange event for all input type*/}
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm

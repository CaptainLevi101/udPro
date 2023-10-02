import React, { useState } from 'react'
import '../Css/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem = ({item}) => {
    const [title,setTitle]=useState(item.title);
   //react tracks the previous state
    const clickHandler=() => {
      setTitle('changed');
    }
   
    return (
        <>
            <Card className='expense-item'>
                <div>
                 <ExpenseDate date={item.date}/>
                </div>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{item.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>

        </>
    )
}

export default ExpenseItem

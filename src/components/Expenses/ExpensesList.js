import React from 'react'
import '../Css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
    if(props.items.length===0){
        return(
            <h2 className='expenses-list__fallback'>NO Expenses Found</h2>
        )
    }
   
    
  return (
    <ul className='expenses-list'>
     {
         props.items.map((it)=>(
        <ExpenseItem key={it.id} item={it}/>
       ))
    }
    </ul>
  )
}

export default ExpensesList

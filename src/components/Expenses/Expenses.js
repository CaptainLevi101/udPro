import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import '../Css/Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = ({items}) => {


  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const check=(item)=>{
      console.log(item.date.getFullYear());
      return item.date.getFullYear()==filteredYear;
  }
  const secList=items.filter(check);
  
  return (
    <Card className='expenses'>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpensesChart expenses={secList}/>
     <ExpensesList items={secList}/>
    </Card>
  )
}

export default Expenses

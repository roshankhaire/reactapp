import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import React, { useState } from 'react';
function Expense(props){
    const Expenses=(props)=>{
        const [filteredYear,setFilteredyear]=useState('2020');
        const filterChangeHandeler=(selectedYear)=>{
            setFilteredyear(selectedYear)
        }
    }
    return(
        <Card className="expenses">
            <ExpenseFilter selecetd={filteredYear} onChangeFilter={ filterChangeHandeler}/>
               <ExpenseItem date={props.item[0].date}
                  title={props.item[0].title}
                  amount={props.item[0].amount} />
               
                 <ExpenseItem date={props.item[1].date}
                  title={props.item[1].title}
                  amount={props.item[1].amount} />
               
               <ExpenseItem date={props.item[2].date}
                  title={props.item[2].title}
                  amount={props.item[2].amount}/>
                
               
        </Card>
    )

}
export default Expense;
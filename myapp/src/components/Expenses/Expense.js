import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter.js'
import React, { useState } from 'react';


    const Expenses=(props)=>{
        const [filteredYear ,setFilteredYear] = useState('2020');
        const filterChangeHandeler=selectedYear=>{
            setFilteredYear(selectedYear)
        };
       const filteredExpense=props.item.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear
       })
    
    return(
        <div>
            <Card className="expenses">
             <ExpenseFilter  selected={filteredYear} onChangeFilter={filterChangeHandeler}/>
             {filteredExpense.length===0 && <p>No Expense Found.</p>}
             {filteredExpense.length>0 && (filteredExpense.map(expense=>
                             <ExpenseItem
                               key={expense.id}
                                title={expense.title}
                               amount={expense.amount} 
                                date={expense.date}/>))}
            
                            
          
               
                
               
        </Card>
        </div>
        
     
    )
    

}
export default Expenses;
import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
           ...enteredExpenseData,
           id: Math.random().toString()
       }
       // console.log(expenseData)
       //console.log(enteredExpenseData)
  
      props.onAddExpense(expenseData)
    }
    return (
        <div>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;
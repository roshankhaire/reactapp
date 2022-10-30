import React from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';
const NewExpense=()=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        //const expenseData={
           
           // id: Math.random().toString()
       // }
       // console.log(expenseData)
       console.log(enteredExpenseData)

       
    }
    return (
        <div>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;
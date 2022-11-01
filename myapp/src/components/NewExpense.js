import React,{useState}from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const[isEditing,setEditing]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
           ...enteredExpenseData,
           id: Math.random().toString()
       }
       // console.log(expenseData)
       //console.log(enteredExpenseData)
  
      props.onAddExpense(expenseData)
      setEditing(false)
    }
    const startEditingHandler=()=>{
        setEditing(true)
    }
    const stopEditingHandler=()=>{
        setEditing(false)
    }
    return (
        <div>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense;
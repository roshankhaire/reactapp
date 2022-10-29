import React,{useState}from "react";
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [enteredTitle,setenteredTitle]=useState('');
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');
    const titleChangeHandler=(event)=>{
        setenteredTitle(event.target.value)
    }
    const AmountChangeHandler=(event)=>{
        setenteredAmount(event.target.value)
    }
    const DateChangeHandler=(event)=>{
        setenteredDate(event.target.value)
    }
    return (
        <div>
            <form>
               <label> Expense title</label>
               <input type="text" onChange={titleChangeHandler}/>
               <label>Expense Amount</label>
               <input type="Amount" onClick={AmountChangeHandler}/>
               <label> Date</label>
               <input type="text" onClick={DateChangeHandler}/>
               <button>submit</button>
            </form>
        </div>
    )

}
export default ExpenseForm;
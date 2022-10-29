import React from "react";
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const titleChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    const AmountChangeHandler=(event)=>{
        console.log(event.target.value)
    }
    const DateChangeHandler=(event)=>{
        console.log(event.target.value)
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
import React,{useState}from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
     const [enteredTitle,setEnteredTitle]=useState('');
     const [enteredAmount,setEnteredAmount]=useState('');
     const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //      enteredTitle:'',
    //      enteredAmount:'',
    //      enteredDate:''

    // })


    
    const titleChangeHandler=(event)=>{
        
            setEnteredTitle(event.target.value)
    
        
       
    }
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
        
    }
     const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
        
     }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
           
            date:new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
    }
    
    return (
        
            <form onSubmit={submitHandler}>
                <div>
                <label> Expense title</label>
                <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div>
                      
               <label>Expense Amount</label>
               <input type="number"  onChange={AmountChangeHandler} min="0.01" step="0.01"/>
                </div>
                 <div>
                 <label> Date</label>
               <input type="date" onChange={ DateChangeHandler}/>
                 </div>
               
              <div>
              <button onClick={submitHandler}>Add Expense</button>
              </div>
              
            </form>
        
    )

}
export default ExpenseForm;
import React,{useState}from "react";
import './ExpenseForm.css';
const ExpenseForm=()=>{
     const [enteredTitle,setenteredTitle]=useState('');
     const [enteredAmount,setenteredAmount]=useState('');
     const [enteredDate,setenteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //      enteredTitle:'',
    //      enteredAmount:'',
    //      enteredDate:''

    // })


    
    const titleChangeHandler=(event)=>{
        
            setenteredTitle(event.target.value)
    
        
       
    }
    const AmountChangeHandler=(event)=>{
        setenteredAmount(event.target.value)
        
    }
    const DateChangeHandler=(event)=>{
        setenteredDate(event.target.value)
        
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
           
            date:new Date(enteredDate)
        }
        console.log(expenseData)
    }
    
    return (
        
            <form onSubmit={submitHandler}>
                <div>
                <label> Expense title</label>
                <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div>
                      
               <label>Expense Amount</label>
               <input type="number" onClick={AmountChangeHandler} min="0.01" step="0.01"/>
                </div>
                 <div>
                 <label> Date</label>
               <input type="date" onClick={DateChangeHandler}/>
                 </div>
               
              <div>
              <button onClick={submitHandler}>submit</button>
              </div>
              
            </form>
        
    )

}
export default ExpenseForm;
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import React,{useState} from 'react'

function ExpenseItem(props){
    const [title,setTitle]=useState(props.title)
    const [amount,setAmount]=useState(props.amount)
    function DeleteExpense(){
        console.log("delete item")
    }
    function ExpenseAmountUpdate(){

      setAmount(100)
    }
    function ExpenseTitleUpdate(){
          setTitle("updated")
    }
    
    return(
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        
        <div className="expense-item__discription">
            <h2>{title}
             <button onClick={ExpenseTitleUpdate}>Update Title</button>
            </h2>
            </div>
        <div className="expense-item__price">${amount}
        <button onClick={ExpenseAmountUpdate}>ExpenseAmountUpdate</button>
        </div>
        <button onClick={DeleteExpense}>Delete Expense</button>
       
        </Card>
    )
}
export default ExpenseItem;
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props){
    function DeleteExpense(){
        console.log("delete item")
    }
    
    return(
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        
        <div className="expense-item__discription">
            <h2>{props.title}</h2>
            </div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={DeleteExpense}>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem;
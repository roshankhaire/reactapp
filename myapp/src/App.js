
import './App.css';
import Expense from './components/Expenses/Expense';

import NewExpense from './components/NewExpense';
function App() {
  // let expensedate=new Date(2021, 3 ,25)
  // let expenseTitle="School Fees"
  // let expenseAmount=299
  let expenses=[
    {
      id:"e1",
      date:new Date(2021,5,4),
      title:"Car insurance",
      amount:2000

    },
    {
      id:"e2",
      date:new Date(2021,10,2),
      title:"Bike insurance",
      amount:5000

    },
    {
      id:"e3",
      date:new Date(2024,5,4),
      title:"healthinsurance",
      amount:10000

    }
  ]
  const addExpenseHandler=(expense)=>{
    console.log(expense)
  }
  return (
    <div className="App">
         <NewExpense onAddExpense={addExpenseHandler}/>
     <Expense item={expenses}/>
     
       
       
    </div>
  );
}

export default App;

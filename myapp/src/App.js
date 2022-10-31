
import './App.css';
import Expense from './components/Expenses/Expense';

import NewExpense from './components/NewExpense';
import React,{useState} from 'react';

  // let expensedate=new Date(2021, 3 ,25)
  // let expenseTitle="School Fees"
  // let expenseAmount=299
  let DUMMY_EXPENSES=[
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


  const App=()=>{

     const [expenses,setExpenses]=useState(DUMMY_EXPENSES)

     const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };



  return (
    <div className="App">
         <NewExpense onAddExpense={addExpenseHandler}/>
     <Expense item={expenses}/>
     
       
       
    </div>
  );
  
  }


export default App;

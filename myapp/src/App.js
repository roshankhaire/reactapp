
import './App.css';
import Expense from './components/Expenses/Expense';
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
  return (
    <div className="App">
     <Expense item={expenses}/>
     
          <h2>Learn React</h2>
       
    </div>
  );
}

export default App;

import { useExpense } from '../../contextapi/ExpenseContext';
import AddExpenses from '../addExpenses/AddExpenses';
import { useEffect, useState } from 'react';

const Expenses = ({setAdded}) =>
{   
    const [display, setDisplay] = useState(false);
    const {expenses, getTotalExpenses, getTotalBalance} = useExpense();

    useEffect(()=>
    {
        getTotalExpenses();
        getTotalBalance();
    },[expenses])
    
    return(
        <div>
            <h1>Expenses : {getTotalExpenses()}</h1>
            <button onClick={()=>setDisplay(true)}>+ Add Expense</button>
            {display && <AddExpenses setDisplay={setDisplay} type="Add"/>}
        </div>
    )   
}

export default Expenses
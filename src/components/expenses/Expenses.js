import { useExpense } from '../../contextapi/ExpenseContext';
import AddExpenses from '../addExpenses/AddExpenses';
import { useEffect, useState } from 'react';
import styles from './Expenses.module.css';

const Expenses = () =>
{   
    const [display, setDisplay] = useState(false);
    const {getExpenses, getTotalExpenses} = useExpense();

    useEffect(() =>
    {
        getExpenses();
    },[])

    return(
        <div className={styles.expenses}>
            <h1>Expenses : <span>₹ {getTotalExpenses()}</span></h1>
            <button onClick={()=>setDisplay(true)}>+ Add Expense</button>
            {display && <AddExpenses setDisplay={setDisplay} type="Add"/>}
        </div>
    )   
}

export default Expenses

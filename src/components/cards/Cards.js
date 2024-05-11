import { useExpense } from '../../contextapi/ExpenseContext';
import AddExpenses from '../addExpenses/AddExpenses';
import styles from './Cards.module.css'
import { useState } from 'react'

const Cards = ({expense}) =>
{
    const [display, setDisplay] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const {deleteExpense} = useExpense();

    return(
        <div className={styles.cards}>
            <p>{expense.title}</p>
            <p>{expense.date}</p>
            <p>{expense.price}</p>

            <button onClick={()=> {   
                setDisplay(true);
                setCurrentId(expense.id)
                }}>Edit</button>

            <button onClick={() => deleteExpense(expense.id) }>Remove</button>
            {display && <AddExpenses setDisplay={setDisplay} type="Edit" currentId={currentId}/>}
        </div>
    )
}

export default Cards;
import { useExpense } from '../../contextapi/ExpenseContext';
import AddExpenses from '../addExpenses/AddExpenses';
import styles from './Cards.module.css'
import { useState } from 'react'
import travel from '../../assets/travel.png'
import entertainment from '../../assets/entertainment.png'
import food from '../../assets/food.png'
import remove from '../../assets/remove.png'
import edit from '../../assets/edit.png'
import { enqueueSnackbar } from 'notistack'

export const icons = (choice) =>
{
    switch(String(choice))
    {
        case 'Food' : return food;
        case 'Entertainment' : return entertainment;
        case 'Travel' : return travel;
        default : return;
    }
}

export const dateFormat = (inputDate) =>
{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dd = inputDate.slice(0,2);
    const mm = inputDate.slice(3,5);
    const yyyy = inputDate.substr(6,10);
    const month = months[Number(mm) - 1];
    return month +' ' +dd +', ' +yyyy;
}

const Cards = ({expense}) =>
{
    const [display, setDisplay] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const {deleteExpense} = useExpense();

    return(
        <div className={styles.cards}>
            <div className={styles.left}>
                <img src={icons(expense.category)} alt="icons"/>
                <div>
                    <p>{expense?.title}</p>
                    <p className={styles.date}>{dateFormat(expense?.date)}</p>
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.price}>₹ {expense?.price}</p>

                <button onClick={() => 
                    {
                        deleteExpense(expense.id);
                        enqueueSnackbar('Expense Deleted', {variant:'error'})
                    }}>
                    <img src={remove} alt="remove"/>
                </button>

                <button onClick={()=> {   
                    setDisplay(true);
                    setCurrentId(expense.id);
                    }}><img src={edit} alt="edit"/>
                </button>
            </div>

            {display && <AddExpenses setDisplay={setDisplay} type="Edit" currentId={currentId}/>}
        </div>
    )
}

export default Cards;

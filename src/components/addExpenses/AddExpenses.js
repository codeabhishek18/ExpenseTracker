import { useExpense } from '../../contextapi/ExpenseContext';
import styles from './AddExpenses.module.css'
import { useState } from 'react'

const expenseId = () =>
{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result ='';
    for(let i=0;i<6;i++)
    {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

const AddExpenses = ({setDisplay, type, currentId}) =>
{
    const [newExpense, setNewExpense] = useState({id: '', title: '', price: '', category: '', date: ''})
    const {addExpense, editExpenses} = useExpense();
     
    const handleChange = (e) =>
    {
        newExpense.id = type === 'Add' ? expenseId() : currentId;
        const {name, value} = e.target;
        setNewExpense({...newExpense, [name] : value})
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(type === 'Edit')
        {
            const selectedItem = JSON.parse(localStorage.getItem('AllExpenses'));
            const index = selectedItem.findIndex(item => item.id === currentId);
            if(index !== -1)
            {
                editExpenses(index, newExpense);
            }
            setNewExpense({id: '', title: '', price: '', category: '', date: ''})
        }
        else
        {
            addExpense(newExpense);
            setNewExpense({id: '', title: '', price: '', category: '', date: ''})
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>{type === 'Add' ?  'Add Expenses' : 'Edit Expenses'}</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <input 
                        name="title"     
                        value={newExpense.title} 
                        onChange={handleChange} 
                        placeholder='Title'
                    />
                    <input 
                        name="price"     
                        value={newExpense.price} 
                        onChange={handleChange} 
                        placeholder='Price'
                    />

                    <input 
                        name="category"  
                        value={newExpense.category} 
                        onChange={handleChange} 
                        placeholder='Select Category'
                    />

                    <input 
                        name="date"      
                        value={newExpense.date} 
                        onChange={handleChange} 
                        placeholder='dd/mm/yy'
                    />

                    <button 
                        className={styles.add}>
                        Add Expense
                    </button>

                    <button 
                        onClick={()=>
                        {
                            setDisplay(false)
                            setNewExpense({id: '',title: '', price: '', category: '', date: ''})
                        }} 
                        className={styles.cancel}>
                        Cancel
                    </button>

                </form>       
            </div>
        </div>
    )
}

export default AddExpenses
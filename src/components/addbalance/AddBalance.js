import { enqueueSnackbar } from 'notistack';
import { useExpense } from '../../contextapi/ExpenseContext';
import styles from './AddBalance.module.css'
import { useState } from 'react'

const AddBalance = ({setShowBalance}) =>
{
    const [newBalance, setNewBalance] = useState('');
    const {addBalance} = useExpense();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addBalance(newBalance);
        setNewBalance('');
        setShowBalance(false);
        enqueueSnackbar('Balance Updated', {variant:'success'});
    }

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Add Balance</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <input
                    value={newBalance}
                    onChange={(e)=> setNewBalance(e.target.value)}
                    placeholder='Income Amount'
                    required/>

                    <button 
                    className={styles.add}>
                    Add Balance
                    </button>

                    <button
                    onClick={()=> 
                        {
                            setShowBalance(false)
                            setNewBalance('')
                        }} 
                    className={styles.cancel}>
                    Cancel
                    </button>

                </form>
            </div>
        </div>
    )
}

export default AddBalance;

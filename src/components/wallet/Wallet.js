import { useEffect, useState } from 'react';
import AddBalance from '../addbalance/AddBalance';
import { useExpense } from '../../contextapi/ExpenseContext';
import styles from './Wallet.module.css'

const Wallet = () =>
{
    const [showBalance, setShowBalance] = useState(false);
    const {getBalance, balance, getBalanceHistory} = useExpense();

    useEffect(()=>
    {
        getBalance();
        getBalanceHistory();
    },[])

    return(
        <div className={styles.wallet}>
            <h1>Wallet Balance : <span>₹ {balance}</span></h1>
            <button onClick={() => setShowBalance(true)}>+   Add Income</button>
            {showBalance && <AddBalance setShowBalance={setShowBalance}/>}
        </div>
    )
}

export default Wallet

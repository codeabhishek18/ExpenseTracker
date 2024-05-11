import { useEffect, useState } from 'react';
import AddBalance from '../addbalance/AddBalance';
import { useExpense } from '../../contextapi/ExpenseContext';

const Wallet = () =>
{
    const [showBalance, setShowBalance] = useState(false);
    const {balance, addBalance, getBalance} = useExpense();

    useEffect(() =>
    {
        const onLoadBalance = localStorage.getItem('Balance')
        if(!onLoadBalance)
            addBalance(5000);
        getBalance();
    },[])

    return(
        <div>
            <h1>Wallet Balance : {balance}</h1>
            <button onClick={()=>setShowBalance(true)}>+ Add Income</button>
            {showBalance && <AddBalance setShowBalance={setShowBalance}/>}
        </div>
    )
}

export default Wallet
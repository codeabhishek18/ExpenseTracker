import styles from './Dashboard.module.css'
import Expenses from '../expenses/Expenses'
import Wallet from '../wallet/Wallet'
import Transactions from '../transactions/Transactions'

const Dashboard = () =>
{
    return(
        <div className={styles.dashboard}>
            <h1>Expense Tracker</h1>
            <div className={styles.upper}> 
                <Wallet/>
                <Expenses/>
            </div>
            <h2>Recent Transactions</h2>
            <div>
                <Transactions/>
            </div>
        </div>
    )
}

export default Dashboard
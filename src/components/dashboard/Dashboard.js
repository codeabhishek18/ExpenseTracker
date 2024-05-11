import Expenses from '../expenses/Expenses'
import { useEffect, useState } from 'react'
import Wallet from '../wallet/Wallet'
import styles from './Dashboard.module.css'
import Transactions from '../transactions/Transactions'

const Dashboard = () =>
{

    return(
        <div>
            <div className={styles.upper}> 
                <Wallet/>
                <Expenses/>
            </div>
            <Transactions/>
        </div>
    )
}

export default Dashboard
import styles from './Dashboard.module.css'
import Expenses from '../expenses/Expenses'
import Wallet from '../wallet/Wallet'
import Transactions from '../transactions/Transactions'
import { useData } from '../../managedata/ManageData'
import PieCharts from '../piechart/PieChart'
import { useEffect } from 'react'
import { useExpense } from '../../contextapi/ExpenseContext'
import BarGraph from '../barchart/BarChart'

const Dashboard = () =>
{
    const {expenses} = useExpense();
    const {data, getEntertainmentData, getFoodData, getTravelData} = useData();

    useEffect(() =>
    {
        getEntertainmentData();   
        getFoodData();
        getTravelData();
    },[expenses])

    return(
        <div className={styles.dashboard}>
            <h1>Expense Tracker</h1>
            <div className={styles.upper}> 
                <Wallet/>
                <Expenses/>
                <PieCharts data={data}/>
            </div>
            <div className={styles.lower}>
                <div className={styles.transactions}>
                    <h2>Recent Transactions</h2>
                    <Transactions/>
                </div>
                <div className={styles.bargraph}>
                    <h2>Top Expenses</h2>
                    <BarGraph data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
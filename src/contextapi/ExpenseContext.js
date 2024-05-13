import { enqueueSnackbar } from "notistack";
import { createContext, useState, useContext, useEffect} from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({children}) =>
{
    const [expenses, setExpenses] = useState([]);
    const [balanceHistory, setBalanceHistory] = useState([]);
    const [balance, setBalance] = useState(0);

    useEffect(() =>
    {
        getTotalBalance();
    },[expenses])

    const getExpenses = () =>
    {
        const items = localStorage.getItem('AllExpenses')
        const expenseItems = JSON.parse(items);
        setExpenses(expenseItems);
    }

    const addExpense = (newExpense) =>
    {
        getExpenses();
        const AllExpenses = expenses ? [...expenses, newExpense] : [newExpense];
        updateExpenses(AllExpenses);
    }

    const updateExpenses = (updatedExpense) =>
    {
        localStorage.setItem('AllExpenses', JSON.stringify(updatedExpense));
        getExpenses();
    }

    const editExpenses = (index, newExpense) =>
    {
        getExpenses();
        expenses[index] = {...expenses[index],...newExpense};
        updateExpenses(expenses)
    }

    const deleteExpense = (id) =>
    {
        getExpenses();
        const index = expenses.findIndex(item => item.id === id);
        if(index > -1)
            expenses.splice(index,1);
        updateExpenses(expenses)
    }

    const getTotalExpenses = () =>
    {
        let total = 0;
        expenses?.forEach((expense)=>
        {
            total += Number(expense?.price);
        })
        return total;
    }

    const getBalanceHistory = () =>
    {
        const list = localStorage.getItem('BalanceHistory');
        let balanceList = list === null ? ['5000'] : JSON.parse(list);
        setBalanceHistory(balanceList);
    }
    
    const addBalanceHistory = (newBalance) =>
    {
        getBalanceHistory();
        balanceHistory.push(newBalance);
        localStorage.setItem('BalanceHistory', JSON.stringify(balanceHistory));
        getBalanceHistory();
    }

    const getBalance = () =>
    {
        const currentBalance = Number(localStorage.getItem('Balance'));
        setBalance(currentBalance);
    } 

    const addBalance = (newBalance) =>
    {
        getBalance();
        addBalanceHistory(newBalance);
        const transientBalance = Number(balance) + Number(newBalance);
        updateBalance(transientBalance);
    }

    const updateBalance = (transientBalance) =>
    {
        localStorage.setItem('Balance', transientBalance);
        getBalance();
    }

    const calculateBalance = () =>
    {
        let total=0;
        balanceHistory?.forEach((balance) =>
        {
            total += Number(balance);
        })
        return total;
    }

    const getTotalBalance = () =>
    {
        const total = calculateBalance() - getTotalExpenses();
        updateBalance(total);
    }

    return(
        <ExpenseContext.Provider 
            value={{
            expenses, 
            getExpenses, 
            addExpense, 
            editExpenses,
            deleteExpense,
            getTotalExpenses, 
            balance, 
            getBalanceHistory,
            setBalance,
            getBalance, 
            addBalance, 
            getTotalBalance
            }}>
            {children}
        </ExpenseContext.Provider>
    )
}

const useExpense = () =>
{
    return useContext(ExpenseContext)
}

export {ExpenseProvider, useExpense};
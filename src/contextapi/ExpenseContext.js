import { createContext, useState, useContext } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({children}) =>
{
    const [expenses, setExpenses] = useState([]);
    const [balance, setBalance] = useState(0);

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
        if(index !== -1)
            expenses.pop(expenses[index]);
        updateExpenses(expenses)
    }

    const getTotalExpenses = () =>
    {
        let total = 0;
        expenses?.forEach((expense)=>
        {
            total += Number(expense.price);
        })
        return total;
    }

    const getBalance = () =>
    {
        const currentBalance = Number(localStorage.getItem('Balance'));
        setBalance(currentBalance);
    } 

    const addBalance = (newBalance) =>
    {
        getBalance();
        const BalanceHistory = Number(balance) + Number(newBalance);
        updateBalance(BalanceHistory);
    }

    const updateBalance = (updatedBalance) =>
    {
        localStorage.setItem('Balance', updatedBalance);
        getBalance();
    }

    const getTotalBalance = () =>
    {
        const total = balance - getTotalExpenses();
        console.log(balance, getTotalExpenses())
        updateBalance(total)
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
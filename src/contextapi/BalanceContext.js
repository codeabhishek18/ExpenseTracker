// import {createContext, useContext, useState } from "react";
// import { useExpense } from "./ExpenseContext";

// const BalanceContext = createContext();

// const BalanceProvider = ({children}) =>
// {
//     const [balance, setBalance] = useState();
//     const [totalBalance, setTotalBalance] = useState(0);

//     const getBalance = () =>
//     {
//         const currentBalance = Number(localStorage.getItem('Balance'));
//         setBalance(currentBalance);
//     } 

//     const addBalance = (newBalance) =>
//     {
//         getBalance();
//         const BalanceHistory = balance === null ? Number(5000) : Number(balance + newBalance);
//         localStorage.setItem('Balance', BalanceHistory);
//         getBalance();
//         getTotalBalance();
//     }

//     const getTotalBalance = () =>
//     {
//         setTotalBalance(balance-totalExpenses);
//     }

//     return(
//         <BalanceContext.Provider value={{balance, getBalance, addBalance, getTotalBalance, totalBalance}}>
//             {children}
//         </BalanceContext.Provider>
//     )
// }

// const useBalance = () =>
// {
//     return useContext(BalanceContext)
// }

// export {BalanceProvider, useBalance}
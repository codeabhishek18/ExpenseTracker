import { useEffect, useState } from "react";
import { useExpense } from "../../contextapi/ExpenseContext";
import Cards from "../cards/Cards";
import styles from './Transactions.module.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'

const Transactions = () =>
{
    const {expenses, getExpenses} = useExpense();
    const cardsperpage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const entertainment = [];
    const food = [];
    const travel = [];

    const lastCard = currentPage * cardsperpage;
    const firstCard = lastCard - cardsperpage;
    const totalPages = expenses ? Math.ceil(expenses.length/3) : 0;
    const cardData = expenses ? expenses.slice(firstCard,lastCard) : [];

    useEffect(() =>
    {
        getExpenses();
    },[])

    useEffect(()=>
    {
        setCurrentPage(totalPages);
        manageData();
    },[expenses])

    const manageData = () =>
    {
        expenses?.forEach((expense) => 
        {
            if(expense.category === 'Entertainment')
            {
                entertainment.push(expense);
            }
            else if(expense.category === 'Food')
            {
                food.push(expense);
            } 
            else
            {
                travel.push(expense)
            }
        });

        localStorage.setItem('Entertainment', JSON.stringify(entertainment));
        localStorage.setItem('Food',  JSON.stringify(food));
        localStorage.setItem('Travel',  JSON.stringify(travel));
    }

    const handlePrev = () =>
    {
        setCurrentPage((prev) => prev === 1 ? 1 : prev-1);
    }

    const handleNext = () =>
    {
        setCurrentPage((prev) => prev === totalPages ? totalPages : prev+1);
    }

    return(
        <div className={styles.wrapper}>
            {cardData.length ? 
            <div className={styles.transactions}>
            {cardData?.map((expense) =>
            (
                <Cards expense={expense} key={expense?.id}/>
            ))}
            <div className={styles.pagination}>
                <button className={styles.navigation} onClick={handlePrev}><img src={left} alt='Navigation'/></button>
                <p className={styles.page}>{currentPage}</p>
                <button className={styles.navigation} onClick={handleNext}><img src={right} alt='Navigation'/></button>
            </div>
            
            </div> 
            
            :
            
            <h3 className={styles.notransactions}>No Recent Transactions</h3>
            }
        </div>
    )
}

export default Transactions;

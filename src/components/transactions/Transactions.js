import { useEffect } from "react";
import { useExpense } from "../../contextapi/ExpenseContext";
import Cards from "../cards/Cards";

const Transactions = () =>
{
    const {expenses, getExpenses} = useExpense();

    useEffect(() =>
    {
        getExpenses();
    },[])

    return(
        <div>
            {expenses?.map((expense) =>
            (
                <Cards expense={expense} key={expense.id}/>
            ))}
        </div>
    )
}

export default Transactions;
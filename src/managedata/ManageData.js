const { useEffect, useState, createContext, useContext } = require("react");
const { useExpense } = require("../contextapi/ExpenseContext");

const DataContext = createContext();

const ManageData = ({children}) =>
{
        const [entertainment, setEntertainment] = useState(0);
        const [food, setFood] = useState(0);
        const [travel, setTravel] = useState(0);

        const getEntertainmentData = () =>
        {
            let total = 0;
            const entertainmentData = JSON.parse(localStorage.getItem('Entertainment'));
            entertainmentData.forEach(element => 
            {    
                total += Number(element.price);
            });
            setEntertainment(total);
        }
        
        const getFoodData = () =>
        {
            let total = 0;
            const foodData = JSON.parse(localStorage.getItem('Food'));
            foodData.forEach(element => 
            {    
                total += Number(element.price);
            });
            setFood(total);
        }
        
        const getTravelData = () =>
        {
            let total = 0;
            const travelData = JSON.parse(localStorage.getItem('Travel'));
            travelData.forEach(element => 
            {    
                   total += Number(element.price);
            });
            setTravel(total);
        }

        const data = [
            {
                name: 'Entertainment',
                value: entertainment 
            },
            {
                name: 'Food',
                value: food 
            },
            {
                name: 'Travel',
                value: travel 
            },
        ]

        return(
            <DataContext.Provider 
                value={{
                    data,
                    getEntertainmentData,
                    getFoodData,
                    getTravelData
                    }}>
                {children}
            </DataContext.Provider>
        )
}

const useData = () =>
{
    return useContext(DataContext)
}

export {ManageData, useData}


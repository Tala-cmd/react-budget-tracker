import React, {useContext, useState, useEffect} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState( expenses || []);

    useEffect(() =>{
        setFilteredExpenses(expenses)
    }, [expenses])

    function handleChange(event) {
        const searchResult = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value)
        )
        setFilteredExpenses(searchResult)
    }
    
    return (
    <>
    <input className='form-control mb-2 mr-sm-2' placeholder="Type to Search..."
        type="text" onChange={handleChange}
    ></input>

    <ul className='list-group mt-3 mb-3' >
        {filteredExpenses.map((expense) =>(
            <ExpenseItem 
            key={expense.id}
            id={expense.id} 
            name={expense.name} 
            cost={expense.cost} />) )}
    </ul>
    </>
)
}

export default ExpenseList
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSES = [
    {
        id : 1,
        date : new Date(2023, 5, 27),
        title : 'Health Insurance',
        amount : 200
    },
    {
        id : 2,
        date : new Date(2023, 5, 27),
        title : 'Food',
        amount : 200
    },
    {
        id : 3,
        date : new Date(2023, 5, 27),
        title : 'Groceries',
        amount : 200
    },
    {
        id : 4,
        date : new Date(2023, 5, 27),
        title : 'Toiletries',
        amount : 200
    }
];

const App = () => {
    
    const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);

    return (
        <div>
            <NewExpense addExpenseHandler={ addExpenseHandler }/>
            <Expenses expenses={expenses}/>
        </div>
    );

    function addExpenseHandler(expenseData) {
        setExpenses([expenseData, ...expenses]);
    }
}

export default App;
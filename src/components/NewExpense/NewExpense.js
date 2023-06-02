import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    return (
        <div className='new-expense'> 
            <ExpenseForm expenseDataHandler = { expenseDataHandler }/>
        </div>
    );

    function expenseDataHandler(expenseData) {
        expenseData['id'] = Math.random().toString();
        
        props.addExpenseHandler(expenseData);
    }
}

export default NewExpense;
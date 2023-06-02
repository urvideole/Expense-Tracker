import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [title, setTitle ] = useState('');

    const [amount, setAmount ] = useState('');

    const [date, setDate ] = useState('');

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={ titleHandler }></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="1" steps="1" value={amount} onChange={ amountHandler }></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} onChange={ dateHandler }></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

    function titleHandler(event) {
        setTitle(event.target.value)
    }

    function amountHandler(event) {
        setAmount(event.target.value)
    }

    function dateHandler(event) {
        setDate(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }

        props.expenseDataHandler(expenseData);
        
        setTitle('');
        setAmount('');
        setDate('');
    }
}

export default ExpenseForm;
import './ExpenseItem.css';
import React from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date} />
            <div className="expense-item__description">  
                <h4>{props.title}</h4>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
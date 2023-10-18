import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  let amount = Number(props.amount).toLocaleString('it-IT', {style : "currency" , currency : 'EUR'});

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
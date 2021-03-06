import React from 'react';

import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
  console.log(props);
  const { items } = props;

  return (
    <table className={style.transaction_history}>
      <thead>
        <tr className={style.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={style.type}>{item.type}</td>
              <td className={style.amount}>{item.amount}</td>
              <td className={style.currency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;

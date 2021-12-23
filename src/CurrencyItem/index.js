import React from 'react';

import './CurrencyItem.css';

const CurrencyItem = ({ upperText, shortCurrencyName, longCurrencyName }) => {
  return (
    <div className='currency-item'>
      <p className='currency-item__upper-text'>{upperText}</p>
      <p className='currency-item__content'>
        <span className='currency-item__short-text'>{shortCurrencyName}</span>
        <span className='currency-item__long-text'> - {longCurrencyName}</span>
      </p>
    </div>
  );
};

export { CurrencyItem };

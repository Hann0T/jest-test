import React from 'react';

import './CurrencyResult.css';

const CurrencyResult = ({ upperText, result }) => {
  return (
    <div className='currency-result'>
      <p className='currency-result__text'>
        <span className='currency-result__upper-text'>{upperText} = </span>
        {result} PEN
      </p>
    </div>
  );
};

export { CurrencyResult };

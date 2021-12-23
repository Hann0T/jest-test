import React from 'react';

import './CurrencyResult.css';

const CurrencyResult = ({ upperText, result }) => {
  return (
    <div className='currency-result'>
      <p className='currency-result__text'>
        <span className='currency-result__upper-text'>{upperText} = </span>
        {isNaN(parseFloat(result)) ? '0.00 PEN' : `${result} PEN`}
      </p>
    </div>
  );
};

export { CurrencyResult };

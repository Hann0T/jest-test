import React from 'react';

import './CurrencyResult.css';

const CurrencyResult = ({ upperText, text }) => {
  return (
    <div className='currency-result'>
      <p className='currency-result__text'>
        <span className='currency-result__upper-text'>{upperText} = </span>
        {text}
      </p>
    </div>
  );
};

export { CurrencyResult };

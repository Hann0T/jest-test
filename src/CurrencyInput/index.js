import React from 'react';

import './CurrencyInput.css';

const CurrencyInput = () => {
  return (
    <div className='currency-input'>
      <label className='currency-input__label'>Amount</label>
      <input className='currency-input__input' value='$1.00' />
    </div>
  );
};

export { CurrencyInput };

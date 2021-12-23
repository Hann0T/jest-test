import React from 'react';

import './CurrencyInput.css';

const CurrencyInput = ({ value, onChange }) => {
  return (
    <div className='currency-input'>
      <label className='currency-input__label'>Amount</label>
      <input
        className='currency-input__input'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { CurrencyInput };

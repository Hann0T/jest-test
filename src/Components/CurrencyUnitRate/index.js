import React from 'react';

import './CurrencyUnitRate.css';

const CurrencyUnitRate = ({ currency, unitRate }) => {
  return (
    <p className='currency-unit-rate'>
      <span>{currency}</span> = <span className='unit-rate'>{unitRate}</span>{' '}
      USD
    </p>
  );
};

export { CurrencyUnitRate };

import React from 'react';

import './CurrencyUnitRate.css';

const CurrencyUnitRate = ({ currency, unitRate }) => {
  return (
    <p className='currency-unit-rate'>
      {currency} = {unitRate}
    </p>
  );
};

export { CurrencyUnitRate };

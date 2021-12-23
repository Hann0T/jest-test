import React from 'react';

const CurrencyUnitRate = ({ currency, unitRate }) => {
  return (
    <p>
      {currency} = {unitRate}
    </p>
  );
};

export { CurrencyUnitRate };

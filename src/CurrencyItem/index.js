import React from 'react';

const CurrencyItem = ({ upperText, shortCurrencyName, longCurrencyName }) => {
  return (
    <div>
      <p>
        <span>{upperText}</span>
        {shortCurrencyName}
        <span> - {longCurrencyName}</span>
      </p>
    </div>
  );
};

export { CurrencyItem };

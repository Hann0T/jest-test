import React from 'react';

const CurrencyResult = ({ upperText, text }) => {
  return (
    <div>
      <p>
        <span>{upperText} = </span>
        {text}
      </p>
    </div>
  );
};

export { CurrencyResult };

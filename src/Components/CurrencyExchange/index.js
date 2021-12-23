import React from 'react';

import { CurrencyContainer } from '../CurrencyContainer';
import { CurrencyInput } from '../CurrencyInput';
import { CurrencyItem } from '../CurrencyItem';
import { CurrencyResult } from '../CurrencyResult';
import { CurrencyUnitRate } from '../CurrencyUnitRate';

import './CurrencyExchange.css';

const CurrencyExchange = () => {
  const [inputValue, setInputValue] = React.useState(1);
  let unitRate = 0.24937655860349128;

  const inputHandler = (ev) => {
    const value = ev.target.value;
    if (isNaN(parseInt(value))) return setInputValue(value);
    setInputValue(parseFloat(value));
  };

  return (
    <section className='currency-exchange'>
      <div className='container'>
        <CurrencyContainer>
          <CurrencyInput value={inputValue} onChange={inputHandler} />
          <CurrencyItem
            upperText={'From'}
            shortCurrencyName={'USD'}
            longCurrencyName={'US Dollar'}
          />
          <CurrencyItem
            upperText={'To'}
            shortCurrencyName={'PEN'}
            longCurrencyName={'Peruvian Sol'}
          />
        </CurrencyContainer>
        <CurrencyContainer>
          <CurrencyResult upperText={'$1.00 Dll'} result={4.03} />
          <CurrencyUnitRate currency={'1 PEN'} unitRate={unitRate} />
        </CurrencyContainer>
      </div>
    </section>
  );
};

export { CurrencyExchange };

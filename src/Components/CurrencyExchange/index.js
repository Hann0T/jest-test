import React from 'react';

import { CurrencyContainer } from '../CurrencyContainer';
import { CurrencyInput } from '../CurrencyInput';
import { CurrencyItem } from '../CurrencyItem';
import { CurrencyResult } from '../CurrencyResult';
import { CurrencyUnitRate } from '../CurrencyUnitRate';

import './CurrencyExchange.css';

const CurrencyExchange = () => {
  const [inputValue, setInputValue] = React.useState(1);
  const [unitRate, setUnitRate] = React.useState(1 / 4.02);

  const inputHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  React.useEffect(() => {
    let value = parseFloat(inputValue);
    if (value <= 100) {
      setUnitRate(1 / 4.02);
    } else if (value > 100 && value < 1000) {
      setUnitRate(1 / 4.08);
    } else if (value >= 1000) {
      setUnitRate(1 / 4.12);
    }
  }, [inputValue]);

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
          <CurrencyResult
            upperText={'$1.00 Dll'}
            result={(inputValue / unitRate).toFixed(2)}
          />
          <CurrencyUnitRate currency={'1 PEN'} unitRate={unitRate} />
        </CurrencyContainer>
      </div>
    </section>
  );
};

export { CurrencyExchange };

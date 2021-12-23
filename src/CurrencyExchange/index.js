import React from 'react';

import { CurrencyContainer } from '../CurrencyContainer';
import { CurrencyInput } from '../CurrencyInput';
import { CurrencyItem } from '../CurrencyItem';
import { CurrencyResult } from '../CurrencyResult';
import { CurrencyUnitRate } from '../CurrencyUnitRate';

import './CurrencyExchange.css';

const CurrencyExchange = () => {
  return (
    <section className='currency-exchange'>
      <div className='container'>
        <CurrencyContainer>
          <CurrencyInput />
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
          <CurrencyResult upperText={'$1.00 Dll'} text={'4.03 PEN'} />
          <CurrencyUnitRate currency={'1 PEN'} unitRate={'0.247733 USD'} />
        </CurrencyContainer>
      </div>
    </section>
  );
};

export { CurrencyExchange };

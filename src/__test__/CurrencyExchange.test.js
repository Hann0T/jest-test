import React from 'react';
import { mount } from 'enzyme';

import { CurrencyExchange } from '../Components/CurrencyExchange';

const inputSimulateChange = (value, wrapper) => {
  const input = wrapper.find('.currency-input__input');

  input.simulate('change', { target: { name: 'input', value: value } });
};

describe('<CurrencyExchange />', () => {
  test('render CurrencyExchange component', () => {
    const wrapper = mount(<CurrencyExchange />);
    expect(wrapper.length).toEqual(1);
  });

  describe('main functionality', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<CurrencyExchange />);
    });

    describe('when the entry value is less than 100', () => {
      let unitRateValue = 1 / 4.02;
      beforeEach(() => {
        inputSimulateChange(100, wrapper);
      });

      test(`The unit rate has to be ${unitRateValue}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(unitRateValue);
      });
    });

    describe('when the entry value is greater than 100', () => {
      let unitRateValue = 1 / 4.08;
      beforeEach(() => {
        inputSimulateChange(200, wrapper);
      });

      test(`The unit rate has to be ${unitRateValue}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(unitRateValue);
      });
    });

    describe('when the entry value is greater than 1000', () => {
      let unitRateValue = 1 / 4.12;
      beforeEach(() => {
        inputSimulateChange(1001, wrapper);
      });

      test(`The unit rate has to be ${unitRateValue}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(unitRateValue);
      });
    });
  });
});

import React from 'react';
import { mount } from 'enzyme';

import { CurrencyExchange } from '../Components/CurrencyExchange';

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
      beforeEach(() => {
        //TODO: make a callback -> mountInput(value);
        let value = 99;
        const input = wrapper.find('.currency-input__input');

        input.simulate('change', { target: { name: 'input', value: value } });
      });
      test(`The unit rate has to be ${1 / 4.02}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(1 / 4.02);
      });
    });

    describe('when the entry value is greater than 100', () => {
      beforeEach(() => {
        let value = 200;
        const input = wrapper.find('.currency-input__input');

        input.simulate('change', { target: { name: 'input', value: value } });
      });

      test(`The unit rate has to be ${1 / 4.08}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(1 / 4.08);
      });
    });

    describe('when the entry value is greater than 1000', () => {
      beforeEach(() => {
        let value = 1001;
        const input = wrapper.find('.currency-input__input');

        input.simulate('change', { target: { name: 'input', value: value } });
      });

      test(`The unit rate has to be ${1 / 4.12}`, () => {
        const currencyUnitRate = wrapper.find('CurrencyUnitRate');
        expect(currencyUnitRate.props().unitRate).toBe(1 / 4.12);
      });
    });
  });
});

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
    let value = 100;

    beforeEach(() => {
      wrapper = mount(<CurrencyExchange />);
      const input = wrapper.find('.currency-input__input');

      input.simulate('change', { target: { name: 'input', value: value } });
    });

    test('when the entry value is less than 100', () => {
      const currencyUnitRate = wrapper.find('CurrencyUnitRate');
      expect(currencyUnitRate.props().unitRate).toBe(1 / 4.02);
    });

    test('when the entry value is greater than 100', () => {
      const currencyUnitRate = wrapper.find('CurrencyUnitRate');
      expect(currencyUnitRate.props().unitRate).toBe(1 / 4.08);
    });

    test('when the entry value is greater than 1000', () => {
      const currencyUnitRate = wrapper.find('CurrencyUnitRate');
      expect(currencyUnitRate.props().unitRate).toBe(1 / 4.12);
    });
  });
});

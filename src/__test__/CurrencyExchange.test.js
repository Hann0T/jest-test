import React from 'react';
import { mount } from 'enzyme';

import { CurrencyExchange } from '../Components/CurrencyExchange';

describe('<CurrencyExchange />', () => {
  test('render CurrencyExchange component', () => {
    const currencyExchange = mount(<CurrencyExchange />);
    expect(currencyExchange.length).toEqual(1);
  });

  // test('first test', () => {
  //   const wrapper = mount(<CurrencyExchange />);
  //   const inputWrapper = wrapper.find('CurrencyInput');
  //   const result = wrapper.find('CurrencyResult');

  //   const input = wrapper.find('input');

  //   input.simulate('change', { target: { value: 100 } });

  //   expect(input.text()).toBe('1');
  // });
});

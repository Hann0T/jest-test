import React from 'react';

import { mount } from 'enzyme';

import { CurrencyInput } from '../Components/CurrencyInput';

const testProps = {
  value: '1',
  onChange: () => {},
};

describe('<CurrencyInput />', () => {
  test('if the input.value is not a number, the class input--danger will be added', () => {
    const wrapper = mount(
      <CurrencyInput value={testProps.value} onChange={testProps.onChange} />,
    );

    expect(wrapper.find('input').hasClass('input--danger')).toBeTruthy();
  });
});

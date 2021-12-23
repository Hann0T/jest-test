import React from 'react';

import { mount } from 'enzyme';

// import { CurrencyInputPropsMock } from '../__mocks__/CurrencyInputPropsMock';
import { CurrencyInput } from '../Components/CurrencyInput';

const props = {
  value: 1,
  onChange: () => {},
};

describe('<CurrencyInput />', () => {
  test('the entry must receive a number', () => {
    const wrapper = mount(
      <CurrencyInput value={props.value} onChange={props.onChange} />,
    );

    expect(typeof wrapper.prop('value')).toBe('number');
  });
});

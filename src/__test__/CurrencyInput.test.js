import React from 'react';

import { mount } from 'enzyme';

// import { CurrencyInputPropsMock } from '../__mocks__/CurrencyInputPropsMock';
import { CurrencyInput } from '../Components/CurrencyInput';

const props = {
  value: '1',
  onChange: () => {},
};

describe('<CurrencyInput />', () => {
  test('if the input.value is not a number, the class input--danger will be added', () => {
    const wrapper = mount(
      <CurrencyInput value={props.value} onChange={props.onChange} />,
    );

    expect(wrapper.find('input').hasClass('input--danger')).toBeTruthy();
  });
});

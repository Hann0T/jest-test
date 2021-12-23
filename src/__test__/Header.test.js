import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Header } from '../Components/Header';

describe('<Header />', () => {
  test('render header component', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });

  test("The header component didn't change", () => {
    const header = renderer.create(<Header />);

    expect(header.toJSON()).toMatchSnapshot();
  });

  test("The header should have 'Convert US Dollars to Peruvian Soles' in the title", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toMatch(
      /Convert US Dollars to Peruvian Soles/,
    );
  });
});

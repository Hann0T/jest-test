import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from '../Header';

test("The header component didn't change", () => {
  const header = renderer.create(<Header />);

  expect(header.toJSON()).toMatchSnapshot();
});

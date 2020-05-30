import { mount } from 'enzyme';
import React from 'react';
import Calculator from './calculator.component';

it('renders without crashing', () => {
  let test = mount(<Calculator />);
  expect(test.debug()).toMatchSnapshot();
  test.unmount();
});

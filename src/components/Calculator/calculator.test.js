import { mount } from 'enzyme';
import React from 'react';
import Calculator from './calculator.component';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

it('renders without crashing', () => {
  let test = mount(<Calculator />);
  expect(test.debug()).toMatchSnapshot();
});

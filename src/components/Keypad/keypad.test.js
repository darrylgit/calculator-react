import { shallow } from 'enzyme';
import React from 'react';

import Keypad from './keypad.component';

import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  NEGATIVE,
  EQUALS,
  DECIMAL
} from '../../constants';

describe('render keypad', () => {
  let keypad;
  beforeEach(() => {
    keypad = shallow(<Keypad />, {
      context: { values: [], pushValue: () => {} }
    });
  });

  afterEach(() => {
    keypad.unmount();
  });

  it('renders without crashing', () => {
    expect(keypad.debug()).toMatchSnapshot();
  });

  it('renders all the keys', () => {
    expect(keypad.find('InputKey').length).toEqual(20);

    const keyConstants = [
      CLEAR,
      BACKSPACE,
      PARENTHESES,
      ADD,
      DIVIDE,
      SUBTRACT,
      MULTIPLY,
      EQUALS,
      NEGATIVE,
      DECIMAL,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ];

    keyConstants.forEach(constant => {
      expect(
        keypad.find('InputKey').findWhere(n => n.prop('value') === constant)
          .length
      ).toEqual(1);
    });
  });
});

import equals from './equals';

import {
  MULTIPLY,
  DIVIDE,
  ADD,
  SUBTRACT,
  OPENPAR,
  CLOSEPAR
} from '../../constants';

it('handles simple calculations', () => {
  expect(equals(['5', ADD, '4'])).toEqual(['9']);
  expect(equals(['6', SUBTRACT, '4'])).toEqual(['2']);
  expect(equals(['7', MULTIPLY, '8'])).toEqual(['56']);
  expect(equals(['1000', DIVIDE, '2'])).toEqual(['500']);
});

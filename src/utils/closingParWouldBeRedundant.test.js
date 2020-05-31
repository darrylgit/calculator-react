import closingParWouldBeRedundant from './closingParWouldBeRedundant';

import {
  OPENPAR,
  CLOSEPAR,
  ADD,
  SUBTRACT,
  DIVIDE,
  MULTIPLY
} from '../constants';

it('returns true if closing par would be redundant', () => {
  expect(closingParWouldBeRedundant([OPENPAR, OPENPAR, 5, ADD, 6])).toEqual(
    true
  );
  expect(
    closingParWouldBeRedundant([4, MULTIPLY, OPENPAR, OPENPAR, 5, ADD, 6])
  ).toEqual(true);
});

it("returns false if closing par wouldn't be redundant", () => {
  expect(
    closingParWouldBeRedundant([OPENPAR, 6, SUBTRACT, OPENPAR, 5, ADD, 6])
  ).toEqual(false);
});

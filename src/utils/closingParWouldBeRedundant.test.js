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
  // These tests are somewhat misleading. By the time the values array gets to closingParWouldBeRedundant,
  // a CLOSEPAR has already been popped off the array. For example, in this first test, the actual scenario
  // we're testing is: In the case of [OPENPAR, OPENPAR, 5, ADD, 6, CLOSEPAR], should the calculator add another
  // closing parenthesis immediately after the already-existing closing parenthesis? In my opinion, no.
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

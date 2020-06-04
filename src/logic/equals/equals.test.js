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
  expect(equals(['5', SUBTRACT, '2', ADD, '45'])).toEqual(['48']);
  expect(equals(['5', MULTIPLY, '10', DIVIDE, '2'])).toEqual(['25']);
  expect(equals(['546', MULTIPLY, '0'])).toEqual(['0']);
});

it('observes order of operations', () => {
  expect(equals(['100', SUBTRACT, '2', MULTIPLY, '20'])).toEqual(['60']);
  expect(equals(['5', ADD, '1000', DIVIDE, '4'])).toEqual(['255']);
});

it('handles decimals', () => {
  expect(equals(['5.2', ADD, '7'])).toEqual(['12.2']);
  expect(equals(['6.3', MULTIPLY, '2'])).toEqual(['12.6']);
  expect(equals(['0.2', DIVIDE, '2'])).toEqual(['0.1']);
});

it('handles negatives', () => {
  expect(equals(['-3', SUBTRACT, '3'])).toEqual(['-6']);
  expect(equals(['25', DIVIDE, '-5'])).toEqual(['-5']);
});

it('handles parentheses', () => {
  expect(equals([OPENPAR, '5', ADD, '1', CLOSEPAR, MULTIPLY, '7'])).toEqual([
    '42'
  ]);
  expect(
    equals(['12', DIVIDE, OPENPAR, '6', SUBTRACT, '3', CLOSEPAR])
  ).toEqual(['4']);
});

it('handles nested parentheses', () => {
  expect(
    equals([
      OPENPAR,
      OPENPAR,
      '5',
      MULTIPLY,
      '3',
      CLOSEPAR,
      ADD,
      '2',
      CLOSEPAR,
      DIVIDE,
      '2'
    ])
  ).toEqual(['8.5']);

  expect(
    equals([
      '5',
      MULTIPLY,
      OPENPAR,
      '-1',
      ADD,
      OPENPAR,
      '5',
      MULTIPLY,
      '5',
      CLOSEPAR,
      SUBTRACT,
      '3',
      CLOSEPAR,
      DIVIDE,
      '7'
    ])
  ).toEqual(['15']);
});

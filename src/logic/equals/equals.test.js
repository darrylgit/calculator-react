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
  expect(equals(['5', ADD, '4'])).toEqual(['9', [ADD, '4']]);
  expect(equals(['6', SUBTRACT, '4'])).toEqual(['2', [SUBTRACT, '4']]);
  expect(equals(['7', MULTIPLY, '8'])).toEqual(['56', [MULTIPLY, '8']]);
  expect(equals(['1000', DIVIDE, '2'])).toEqual(['500', [DIVIDE, '2']]);
  expect(equals(['5', SUBTRACT, '2', ADD, '45'])).toEqual(['48', [ADD, '45']]);
  expect(equals(['5', MULTIPLY, '10', DIVIDE, '2'])).toEqual([
    '25',
    [DIVIDE, '2']
  ]);
  expect(equals(['546', MULTIPLY, '0'])).toEqual(['0', [MULTIPLY, '0']]);
});

it('observes order of operations', () => {
  expect(equals(['100', SUBTRACT, '2', MULTIPLY, '20'])).toEqual([
    '60',
    [MULTIPLY, '20']
  ]);
  expect(equals(['5', ADD, '1000', DIVIDE, '4'])).toEqual([
    '255',
    [DIVIDE, '4']
  ]);
});

it('handles decimals', () => {
  expect(equals(['5.2', ADD, '7'])).toEqual(['12.2', [ADD, '7']]);
  expect(equals(['6.3', MULTIPLY, '2'])).toEqual(['12.6', [MULTIPLY, '2']]);
  expect(equals(['0.2', DIVIDE, '2'])).toEqual(['0.1', [DIVIDE, '2']]);
});

it('handles negatives', () => {
  expect(equals(['-3', SUBTRACT, '3'])).toEqual(['-6', [SUBTRACT, '3']]);
  expect(equals(['25', DIVIDE, '-5'])).toEqual(['-5', [DIVIDE, '-5']]);
});

it('handles parentheses', () => {
  expect(equals([OPENPAR, '5', ADD, '1', CLOSEPAR, MULTIPLY, '7'])).toEqual([
    '42',
    [MULTIPLY, '7']
  ]);
  expect(
    equals(['12', DIVIDE, OPENPAR, '6', SUBTRACT, '3', CLOSEPAR])
  ).toEqual(['4', [DIVIDE, OPENPAR, '6', SUBTRACT, '3', CLOSEPAR]]);
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
  ).toEqual(['8.5', [DIVIDE, '2']]);

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
  ).toEqual(['15', [DIVIDE, '7']]);
});

it("doesn't calculate expressions with mismatched parentheses", () => {
  expect(equals([OPENPAR, '3', ADD, '2'])).toEqual([OPENPAR, '3', ADD, '2']);
  expect(equals(['8', SUBTRACT, '3', OPENPAR])).toEqual([
    '8',
    SUBTRACT,
    '3',
    OPENPAR
  ]);
});

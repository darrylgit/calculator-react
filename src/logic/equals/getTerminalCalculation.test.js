import getTerminalCalculation from './getTerminalCalculation';
import {
  CLOSEPAR,
  ADD,
  SUBTRACT,
  MULTIPLY,
  OPENPAR,
  DIVIDE
} from '../../constants';

it('handles simple cases with no parentheses', () => {
  expect(getTerminalCalculation(['5', ADD, '5'])).toEqual([ADD, '5']);
  expect(getTerminalCalculation(['65', SUBTRACT, '6', MULTIPLY, '6'])).toEqual([
    MULTIPLY,
    '6'
  ]);
});

it('handles parentheses', () => {
  expect(
    getTerminalCalculation([
      '52',
      SUBTRACT,
      OPENPAR,
      '4',
      MULTIPLY,
      '6',
      CLOSEPAR
    ])
  ).toEqual([SUBTRACT, OPENPAR, '4', MULTIPLY, '6', CLOSEPAR]);

  expect(
    getTerminalCalculation([
      '3',
      DIVIDE,
      '52',
      SUBTRACT,
      OPENPAR,
      '4',
      MULTIPLY,
      OPENPAR,
      '5',
      ADD,
      '6',
      CLOSEPAR,
      CLOSEPAR
    ])
  ).toEqual([
    SUBTRACT,
    OPENPAR,
    '4',
    MULTIPLY,
    OPENPAR,
    '5',
    ADD,
    '6',
    CLOSEPAR,
    CLOSEPAR
  ]);
});

it('returns null in bogus cases', () => {
  expect(getTerminalCalculation(['1'])).toEqual(null);
  expect(getTerminalCalculation(['2', ADD, '3', MULTIPLY])).toEqual(null);
  expect(
    getTerminalCalculation(['3', DIVIDE, '6', SUBTRACT, OPENPAR, '5'])
  ).toEqual(null);
  expect(
    getTerminalCalculation([
      OPENPAR,
      '5',
      ADD,
      OPENPAR,
      '23',
      DIVIDE,
      '5',
      CLOSEPAR,
      CLOSEPAR
    ])
  ).toEqual(null);
});

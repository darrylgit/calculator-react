import newValueHandler from './newValueHandler';
import { DIVIDE, MULTIPLY, SUBTRACT, ADD, CLEAR } from '../../constants';

it('concatenates new non-zero numbers into the current index', () => {
  expect(newValueHandler([], 5)).toEqual([5]);
  expect(newValueHandler([5], 6)).toEqual([56]);
});

it('disallows multiple initial zeroes', () => {
  expect(newValueHandler([0], 0)).toEqual([0]);
});

it('handles pushing operators', () => {
  expect(newValueHandler([23], ADD)).toEqual([23, ADD]);
});

it('disallows initial operators', () => {
  expect(newValueHandler([], DIVIDE)).toEqual([]);
  expect(newValueHandler([], MULTIPLY)).toEqual([]);
  expect(newValueHandler([], SUBTRACT)).toEqual([]);
  expect(newValueHandler([], ADD)).toEqual([]);
});

it('disallows multiple consecutive operators', () => {
  expect(newValueHandler(['23', ADD], ADD)).toEqual(['23', ADD]);
  expect(newValueHandler(['23', ADD], SUBTRACT)).toEqual(['23', SUBTRACT]);
});

it('clears values array when input is CLEAR', () => {
  expect(newValueHandler([432, DIVIDE, 4], CLEAR)).toEqual([]);
});

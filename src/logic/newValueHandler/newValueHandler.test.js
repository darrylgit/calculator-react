import newValueHandler from './newValueHandler';

it('concatenates new non-zero numbers into the current index', () => {
  expect(newValueHandler([], 5)).toEqual([5]);
  expect(newValueHandler([5], 6)).toEqual([56]);
});

it('disallows multiple initial zeroes', () => {
  expect(newValueHandler([0], 0)).toEqual([0]);
});

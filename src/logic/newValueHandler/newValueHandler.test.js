import newValueHandler from './newValueHandler';

it('concatenates new non-zero numbers into the current index', () => {
  const values = [5];
  const newValue = 6;

  expect(newValueHandler(values, newValue)).toEqual([56]);
});

import isNumber from './isNumber';

it('accepts numbers', () => {
  expect(isNumber(3)).toEqual(true);
  expect(isNumber(-3)).toEqual(true);
  expect(isNumber(3.03)).toEqual(true);
  expect(isNumber(-0.4)).toEqual(true);
  expect(isNumber(-234234234)).toEqual(true);
  expect(isNumber(643454.434)).toEqual(true);
});

it('accepts strings that represent numbers', () => {
  expect(isNumber('1')).toEqual(true);
  expect(isNumber('5.00')).toEqual(true);
  expect(isNumber('-0.2')).toEqual(true);
  expect(isNumber('-234234.000')).toEqual(true);
});

it('rejects everything else', () => {
  expect(isNumber('one')).toEqual(false);
  expect(isNumber('(')).toEqual(false);
  expect(isNumber('.')).toEqual(false);
  expect(isNumber('MULTIPLY')).toEqual(false);
});

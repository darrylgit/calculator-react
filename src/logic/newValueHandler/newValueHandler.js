import { DIVIDE, MULTIPLY, SUBTRACT, ADD } from '../../constants';

// const isNatural = val => {
//   const naturalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return naturalNumbers.includes(val);
// };

const isOperator = val => [DIVIDE, MULTIPLY, SUBTRACT, ADD].includes(val);

export default (currentValues, newValue) => {
  let values = [...currentValues];

  if (typeof newValue == 'number') {
    let lastValue = values.pop() || 0;

    // If the current last value is an operator, put incoming number in new index
    if (isOperator(lastValue)) {
      return [...values, lastValue, newValue];
    }

    // If the current last value is a number, add incoming number as digit to that number
    lastValue *= 10;
    lastValue += newValue;
    values.push(lastValue);

    return values;
  } else if (isOperator(newValue)) {
    // Disallow initial operators:
    if (!values.length) {
      return values;
    }

    let lastValue = values.pop() || 0;

    // Only add incoming operator as new index if lastValue isn't an operator
    if (!isOperator(lastValue)) {
      return [...values, lastValue, newValue];
    }
  }

  return [...values, newValue];
};

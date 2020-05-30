import {
  DIVIDE,
  MULTIPLY,
  SUBTRACT,
  ADD,
  CLEAR,
  BACKSPACE
} from '../../constants';

const isOperator = val => [DIVIDE, MULTIPLY, SUBTRACT, ADD].includes(val);

export default (currentValues, newValue) => {
  let values = [...currentValues];

  // HANDLE CLEAR
  if (newValue === CLEAR) {
    return [];
  }

  // HANDLE BACKSPACE
  if (newValue === BACKSPACE) {
    if (!values.length) {
      return values;
    }

    let lastValue = values.pop();

    // If last value is an operator, return array without that operator
    if (isOperator(lastValue)) {
      return values;
    }

    // If number, delete last digit (or whole number if single-digit)
    if (typeof lastValue == 'number') {
      lastValue /= 10;
      return Math.floor(lastValue)
        ? [...values, Math.floor(lastValue)]
        : values;
    }
  }

  // HANDLE NUMBERS
  if (typeof newValue == 'number') {
    let lastValue = values.pop() || 0;

    // If the current last value is an operator, put incoming number in new index
    if (isOperator(lastValue)) {
      return [...values, lastValue, newValue];
    }

    // If the current last value is a number, add incoming number as digit to that number
    lastValue *= 10;
    lastValue += newValue;
    return [...values, lastValue];

    // HANDLE OPERATORS
  } else if (isOperator(newValue)) {
    // Disallow initial operators:
    if (!values.length) {
      return values;
    }

    let lastValue = values.pop();

    // Only add incoming operator as new index if lastValue isn't an operator
    if (!isOperator(lastValue)) {
      return [...values, lastValue, newValue];
    }
  }

  return [...values, newValue];
};

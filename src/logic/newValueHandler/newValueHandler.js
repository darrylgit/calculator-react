import {
  DIVIDE,
  MULTIPLY,
  SUBTRACT,
  ADD,
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  OPENPAR,
  CLOSEPAR,
  DECIMAL
} from '../../constants';

import isOperator from '../../utils/isOperator';
import closingParWouldBeRedundant from '../../utils/closingParWouldBeRedundant';

export default (currentValues, inputValue) => {
  if (inputValue === undefined) {
    console.error('ERR: No input value specified');
  }

  let values = [...currentValues];

  // HANDLE CLEAR
  if (inputValue === CLEAR) {
    return [];
  }

  // HANDLE BACKSPACE
  if (inputValue === BACKSPACE) {
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

  // HANDLE PARENTHESES
  if (inputValue === PARENTHESES) {
    // Push an opening parenthesis when array is empty
    if (!values.length) {
      return [OPENPAR];
    }

    // Helpers to determine if there are any unclosed parentheses
    const openParCount = values.reduce(
      (acc, val) => (val === OPENPAR ? acc + 1 : acc),
      0
    );
    const closeParCount = values.reduce(
      (acc, val) => (val === CLOSEPAR ? acc + 1 : acc),
      0
    );
    const unclosedPars = openParCount - closeParCount;

    // Get the last value
    let lastValue = values.pop();

    // If last value is a hanging decimal, ditch the decimal
    if (lastValue === '.') {
      lastValue = values.pop();
    }

    // If last value is a number
    if (typeof lastValue == 'number') {
      // Multiply and start new block of parentheses if no parentheses are unclosed
      if (!unclosedPars) {
        return [...values, lastValue, MULTIPLY, OPENPAR];
      }

      // If the current block of parentheses has an operator
      if (isOperator(values[values.length - 1])) {
        return [...values, lastValue, CLOSEPAR];
        // If not, multiply and start a new block of parentheses
      } else {
        return [...values, lastValue, MULTIPLY, OPENPAR];
      }
    }

    // If the last value is a hanging negative, coerce to -1, multiply, open new parentheses
    if (lastValue === '-') {
      lastValue = -1;
      return [...values, lastValue, MULTIPLY, OPENPAR];
    }

    // If the last value is an opening parenthesis, push another opening parenthesis
    if (lastValue === OPENPAR) {
      return [...values, lastValue, OPENPAR];
    }

    // If the last value is an operator, push an opening parenthesis
    if (isOperator(lastValue)) {
      return [...values, lastValue, OPENPAR];
    }

    // If the last value is a closing parenthesis
    if (lastValue === CLOSEPAR) {
      // Push multiply and open pars if no unclosed parentheses OR if closing par would be redundant
      if (!unclosedPars || closingParWouldBeRedundant(values)) {
        return [...values, lastValue, MULTIPLY, OPENPAR];
      }

      return [...values, lastValue, CLOSEPAR];
    }
  }

  // HANDLE NUMBERS
  if (typeof inputValue == 'number') {
    let lastValue = values.pop() || 0;

    // If the current last value is an operator, put incoming number in new index
    if (isOperator(lastValue)) {
      return [...values, lastValue, inputValue];
    }

    // If the current last value is a number, add incoming number as digit to that number
    lastValue *= 10;
    lastValue += inputValue;
    return [...values, lastValue];

    // HANDLE OPERATORS
  } else if (isOperator(inputValue)) {
    // Disallow initial operators:
    if (!values.length) {
      return values;
    }

    let lastValue = values.pop();

    // Only add incoming operator as new index if lastValue isn't an operator
    if (!isOperator(lastValue)) {
      return [...values, lastValue, inputValue];
    }
  }

  return [...values, inputValue];
};

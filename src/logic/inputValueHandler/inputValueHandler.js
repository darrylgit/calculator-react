import {
  MULTIPLY,
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  OPENPAR,
  CLOSEPAR,
  DECIMAL,
  NEGATIVE
} from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import closingParWouldBeRedundant from '../../utils/closingParWouldBeRedundant';

export default (currentValues, inputValue) => {
  if (inputValue === undefined) {
    console.error('ERR: No input value specified');
  }

  let values = [...currentValues];

  // HANDLE NUMBERS
  if (isNumber(inputValue)) {
    let lastValue = values.pop() || '';

    // Disallow mutliple initial zeroes
    if (lastValue === '0') {
      return [...values, lastValue];
    }

    if (isNumber(lastValue) || lastValue === '') {
      // String concatenationn
      lastValue += inputValue;
      return [...values, lastValue];
    }

    // If the current last value is an operator, put incoming number in new index
    if (isOperator(lastValue)) {
      return [...values, lastValue, inputValue];
    }

    switch (lastValue) {
      case '-':
        return [...values, lastValue + inputValue];
      case OPENPAR:
        return [...values, lastValue, inputValue];
      case CLOSEPAR:
        return [...values, lastValue, MULTIPLY, inputValue];
      default:
        return [...values, lastValue];
    }
  }

  // HANDLE OPERATORS
  if (isOperator(inputValue)) {
    // Disallow initial operators:
    if (!values.length) {
      return values;
    }

    let lastValue = values.pop();

    // Only add incoming operator as new index after numbers
    // The parseFloat bit gets rid of dangling decimals
    if (isNumber(lastValue)) {
      lastValue = parseFloat(lastValue).toString();
      return [...values, lastValue, inputValue];
    }

    // Replace dangling operators with incoming operator
    if (isOperator(lastValue)) {
      return [...values, inputValue];
    }

    switch (lastValue) {
      case OPENPAR:
      case '-':
        return [...values, lastValue];
      case CLOSEPAR:
        return [...values, lastValue, inputValue];
      default:
        return [...values, inputValue];
    }
  }

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

    // If number, delete last digit (or whole number if single-digit)
    if (isNumber(lastValue)) {
      let truncatedNumber = lastValue.slice(0, -1);

      return truncatedNumber ? [...values, truncatedNumber] : [...values];
    }

    //Edge case: deletes hidden MULTIPLYs
    if (lastValue === OPENPAR) {
      let precedingValue = values.pop();
      if (!precedingValue) {
        return [];
      }
      return precedingValue === MULTIPLY ? values : [...values, precedingValue];
    }

    // Default behavior
    return values;
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
    if (lastValue.slice(-1) === '.') {
      lastValue = lastValue.slice(0, -1);
    }

    // If last value is a number
    if (isNumber(lastValue)) {
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
      lastValue = '-1';
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

  // HANDLE NEGATIVE
  if (inputValue === NEGATIVE) {
    if (!values.length) {
      return ['-'];
    }

    let lastValue = values.pop();

    if (isNumber(lastValue)) {
      lastValue = lastValue[0] === '-' ? lastValue.slice(1) : '-' + lastValue;
      return [...values, lastValue];
    }

    if (isOperator(lastValue)) {
      return [...values, lastValue, '-'];
    }

    switch (lastValue) {
      case '-':
        return values;
      case OPENPAR:
        return [...values, lastValue, '-'];
      case CLOSEPAR:
        return [...values, lastValue, MULTIPLY, '-'];
      default:
        return [...values, lastValue];
    }
  }

  // HANDLE DECIMAL
  if (inputValue === DECIMAL) {
    if (!values.length) {
      return ['0.'];
    }

    let lastValue = values.pop();

    if (isNumber(lastValue)) {
      return lastValue.includes('.')
        ? [...values, lastValue]
        : [...values, lastValue + '.'];
    }

    if (isOperator(lastValue)) {
      return [...values, lastValue, '0.'];
    }

    switch (lastValue) {
      case '-':
        return [...values, '-0.'];
      case OPENPAR:
        return [...values, lastValue, '0.'];
      case CLOSEPAR:
        return [...values, lastValue, MULTIPLY, '0.'];
      default:
        return [...values, lastValue];
    }
  }

  return [...values, inputValue];
};

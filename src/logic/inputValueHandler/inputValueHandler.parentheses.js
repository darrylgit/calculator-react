import { MULTIPLY, OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import closingParWouldBeRedundant from '../../utils/closingParWouldBeRedundant';

const parenthesesHandler = values => {
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
};

export default parenthesesHandler;

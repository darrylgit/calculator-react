import { MULTIPLY, OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';
import closingParWouldBeRedundant from '../../utils/closingParWouldBeRedundant';
import unclosedPars from '../../utils/unclosedPars';

const parenthesesHandler = values => {
  // Push an opening parenthesis when array is empty
  if (!values.length) {
    return [OPENPAR];
  }

  const numberOfUnclosedPars = unclosedPars(values);

  // Get the last value
  let lastValue = values.pop();

  // If last value is a number
  if (isNumber(lastValue)) {
    // Get rid of dangling decimals
    lastValue = parseFloat(lastValue).toString();

    // Multiply and start new block of parentheses if no parentheses are unclosed
    if (numberOfUnclosedPars === 0) {
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

  // If the last value is an operator, push an opening parenthesis
  if (isOperator(lastValue)) {
    return [...values, lastValue, OPENPAR];
  }

  switch (lastValue) {
    case '-':
      lastValue = '-1';
      return [...values, lastValue, MULTIPLY, OPENPAR];
    case OPENPAR:
      return [...values, lastValue, OPENPAR];
    case CLOSEPAR:
      // Push multiply and open pars if no unclosed parentheses OR if closing par would be redundant
      if (numberOfUnclosedPars === 0 || closingParWouldBeRedundant(values)) {
        return [...values, lastValue, MULTIPLY, OPENPAR];
      }

      return [...values, lastValue, CLOSEPAR];
    default:
      return [...values, lastValue];
  }
};

export default parenthesesHandler;

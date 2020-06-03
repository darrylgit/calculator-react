import { MULTIPLY, OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';

const numberHandler = (values, inputValue) => {
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
};

export default numberHandler;

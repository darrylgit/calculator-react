import { MULTIPLY, OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';

const decimalHandler = values => {
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
};

export default decimalHandler;

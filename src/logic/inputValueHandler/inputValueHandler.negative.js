import { MULTIPLY, OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';

const negativeHandler = values => {
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
};

export default negativeHandler;

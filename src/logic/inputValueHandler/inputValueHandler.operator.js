import { OPENPAR, CLOSEPAR } from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';

const operatorHandler = (values, inputValue) => {
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
};

export default operatorHandler;

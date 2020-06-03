import { MULTIPLY, OPENPAR } from '../../constants';

import isNumber from '../../utils/isNumber';

const backspaceHandler = values => {
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
};

export default backspaceHandler;

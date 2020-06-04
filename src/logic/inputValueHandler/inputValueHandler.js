import {
  CLEAR,
  BACKSPACE,
  PARENTHESES,
  DECIMAL,
  NEGATIVE,
  EQUALS
} from '../../constants';

import isOperator from '../../utils/isOperator';
import isNumber from '../../utils/isNumber';

import numberHandler from './inputValueHandler.number';
import operatorHandler from './inputValueHandler.operator';
import backspaceHandler from './inputValueHandler.backspace';
import parenthesesHandler from './inputValueHandler.parentheses';
import negativeHandler from './inputValueHandler.negative';
import decimalHandler from './inputValueHandler.decimal';
import equals from '../equals/equals';

export default (currentValues, inputValue) => {
  if (inputValue === undefined) {
    console.error('ERR: No input value specified');
  }

  let values = [...currentValues];

  // Handle numbers
  if (isNumber(inputValue)) {
    return numberHandler(values, inputValue);
  }

  // Handle opeators
  if (isOperator(inputValue)) {
    return operatorHandler(values, inputValue);
  }

  // Handle everything else
  switch (inputValue) {
    case CLEAR:
      return [];
    case BACKSPACE:
      return backspaceHandler(values);
    case PARENTHESES:
      return parenthesesHandler(values);
    case NEGATIVE:
      return negativeHandler(values);
    case DECIMAL:
      return decimalHandler(values);
    case EQUALS:
      return equals(values);
    default:
      return [...values, inputValue];
  }
};
